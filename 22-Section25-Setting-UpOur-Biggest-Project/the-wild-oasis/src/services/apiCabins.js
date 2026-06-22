import supabase, { supabaseUrl } from "./supabase";

// see
export async function getCabine() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

// add
export async function createCabin(newCabin) {
  // this make new cabin
  // need to tow think after to upload image(or any file) __1_ unique name,__2 _ Make url cataining the path to the bueket
  // 1_ unique name
  const ImageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );

  // 2_Make Url
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${ImageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be Create");
  }
  return data;
}

// delete
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be delete");
  }
  return data;
}
