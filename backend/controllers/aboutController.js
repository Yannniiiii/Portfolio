// backend/controllers/aboutController.js
import { supabase } from "../utils/supabase.js";

export const getAboutData = async (req, res) => {
  try {
    // Fetch about info
    const { data: about, error: aboutError } = await supabase
      .from("about_info")
      .select("*");

    // Fetch civil service info
    const { data: civilService, error: civilError } = await supabase
      .from("civil_service")
      .select("*");

    // Fetch experiences and their highlights
    const { data: experiences, error: expError } = await supabase
      .from("experiences")
      .select("*, experience_highlights(*)")
      .order("duration", { ascending: false });

    // Fetch skills
    const { data: skills, error: skillsError } = await supabase
      .from("skills")
      .select("*")
      .order("category", { ascending: true });

    // Check for errors
    if (aboutError || civilError || expError || skillsError) {
      throw aboutError || civilError || expError || skillsError;
    }

    res.json({ about, civilService, experiences, skills });
  } catch (error) {
    console.error("Error fetching about data:", error);
    res.status(500).json({ error: error.message });
  }
};