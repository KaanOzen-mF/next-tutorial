import fs from "fs"; // File System module
import path from "path"; // Path module
import matter from "gray-matter"; // Frontmatter parser

const postsDirectory = path.join(process.cwd(), "blogposts");

export function getSortedPostData() {
  // Get all file names in the directory
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove file extension
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };
    return blogPost; // Return the post data
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1)); // Sort posts by date
}
