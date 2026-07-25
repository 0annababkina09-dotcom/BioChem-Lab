import { supabase } from "@/lib/supabase";

export type CreateTestData = {
  title: string;
  topic: string;
  description: string;
  time_limit: number;
};

export async function getTests() {
  const { data, error } = await supabase
    .from("tests")
    .select("*");

  if (error) throw error;

  return data;
}

export async function createTest(test: CreateTestData) {
  const { data, error } = await supabase
    .from("tests")
    .insert({
      title: test.title,
      topic: test.topic,
      description: test.description,
      time_limit: test.time_limit,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function deleteTest(id: string) {
  const { error } = await supabase
    .from("tests")
    .delete()
    .eq("id", id);

  if (error) throw error;
}

export async function getTestById(id: string) {
  const { data, error } = await supabase
    .from("tests")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function updateTest(
  id: string,
  test: {
    title: string;
    topic: string;
    time_limit: number;
  }
) {
  const { error } = await supabase
    .from("tests")
    .update({
      title: test.title,
      topic: test.topic,
      time_limit: test.time_limit,
    })
    .eq("id", id);

  if (error) throw error;
}

// ======================
// ВОПРОСЫ
// ======================

export async function getQuestions(testId: string) {
  const { data, error } = await supabase
    .from("questions")
    .select("*")
    .eq("test_id", testId)
    .order("created_at", { ascending: true });

  if (error) throw error;

  return data;
}

export async function deleteQuestion(id: string) {
  const { error } = await supabase
    .from("questions")
    .delete()
    .eq("id", id);

  if (error) throw error;
}