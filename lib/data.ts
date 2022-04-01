import fs from "fs"
import path from "path"
import matter from "gray-matter"

const projectDirectory = path.join(process.cwd(), "data/project");


export default function getAllProject() {
    const allProject = fs.readdirSync(projectDirectory);

    return allProject.map((filename) => {
        const permalink = filename.replace(".md", "");
        const fileContent = fs.readFileSync(
            path.join(projectDirectory, filename),
            "utf8"
        );

        const { data, content } = matter(fileContent);

        return {
            data,
            content,
            permalink
        }
    })
}
