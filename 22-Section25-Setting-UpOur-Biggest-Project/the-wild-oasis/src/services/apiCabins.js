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
export async function createEditCabin(newCabin, id) {
  // reuse img componet chinking
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // this make new cabin
  // need to tow think after to upload image(or any file) __1_ unique name,__2 _ Make url cataining the path to the bueket
  // 1_ unique name
  const ImageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );
  // using
  // 2_Make Url
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${ImageName}`;

  // 1)create / edit cabin
  let query = supabase.from("cabins");
  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  const { data, error } = await query.select().single();
  // error handling
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be Create");
  }
  // upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(ImageName, newCabin.image);
  //3 Delete the cabin If there was an error uploading image fale
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Cabins image is not uplode then cabin not be upload");
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
