import { revalidatePath } from "next/cache";

export const addPost = async (formData: any) => {
  "use server";
  //   const title = formData.get("title");
  //   const desc = formData.get("desc");
  //   const slug = formData.get("slug");
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  console.log(title, desc, slug, userId);
};
revalidatePath("/blog") //TO SAVE THE ACTIONS AFTER ADDING A NEW ENTRY