import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import type { Project } from "../../@types";
import { Layout } from "../../components";
import styles from "../../styles/ProjectSlug.module.css";

type Props = {
  previousProject: Project;
  project: Project;
  nextProject: Project;
  notFound?: boolean;
};
const ProjectDetails = ({ previousProject, project, nextProject }: Props) => {
  //function that return date in format MMM DD, YYYY
  const getDate = (date: string): string => {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString("default", { month: "short" });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    return `${month} ${day}, ${year}`;
  };
  const getKeywords = (): string[] => {
    const keywords: string[] = [project.name];
    project.technologies.forEach((technology) => {
      keywords.push(technology.name);
    });
    return keywords;
  };
  return (
    <Layout title={`${project.name} | Chetan Jain`} keywords={getKeywords().join(",")} description={project.summary}>
      <section className={styles.project}>
        <h1 className="text-center pb-10 capitalize text-5xl">{project.name}</h1>
        <div className="flex flex-col sm:flex-row justify-between gap-10 items-center">
          <div className="contributor flex flex-row gap-x-5">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/chetan?tr=f-png,h-60,w-60,r-100`}
              height={60}
              width={60}
              alt="Collaborator - Chetan Jain"
            />
            <span>
              <h6 className="text-2xl mb-1 p-0 font-bold">Chetan Jain </h6>
              <time className="font-thin">
                {getDate(project.startDate)} - {getDate(project.endDate)}
              </time>
            </span>
          </div>
          <span className={`${styles.url} bg-[#007deb] rounded-lg`}>
            <a
              className="opacity-90 hover:opacity-100 "
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Github link to Project"
            >
              <FaGithub className="w-6 h-6 mt-2" />
            </a>
            {project.externalUrl && (
              <a
                className="opacity-90 hover:opacity-100 "
                href={project.externalUrl}
                target="_blank"
                rel="noreferrer nofollow"
                aria-label="Hosted link to Project"
              >
                <FaExternalLinkAlt className="w-8 h-8 pt-2.5" />
              </a>
            )}
          </span>
        </div>
        <div className={styles.markdown}>
          <ReactMarkdown>{project.description}</ReactMarkdown>
        </div>
        {/* {project.sliderImages?.length > 0 && (
					<div className={styles.image_container}>
						{project.sliderImages?.map((image, i) => (
							<figure key={image.name + i}>
								<Image
									src={`${image.url}?tr=h-600,w=1000`}
									alt={"slider" + image.name}
									width={1000}
									height={600}
								/>
							</figure>
						))}
					</div>
				)} */}
        <div
          className={`${styles.pagination} flex md:flex-row flex-col items-center justify-between sm:items-start mt-10`}
        >
          {previousProject.slug ? (
            <Link
              href={`/projects/${previousProject.slug}`}
              className="flex items-start cursor-pointer w-full sm:w-6/12 text-left justify-end float-left"
              aria-label="Previous Project"
            >
              <FaLongArrowAltLeft className="w-32 h-20 mr-5" />
              <aside>
                <h4 className="font-bold text-2xl uppercase">Previous</h4>
                <p className="break-words opacity-40">{previousProject.summary}</p>
              </aside>
            </Link>
          ) : (
            <div />
          )}
          {nextProject.slug && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-start cursor-pointer  w-full md:w-6/12 text-right justify-end float-right"
              aria-label="Next Project"
            >
              <aside>
                <h4 className="font-bold text-2xl uppercase">NEXT</h4>
                <p className=" opacity-40">{nextProject.summary}</p>
              </aside>
              <FaLongArrowAltRight className="w-32 h-20 ml-5" />
            </Link>
          )}
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps({ params: { slug } }: any) {
  const res = await fetch(`${process.env.BASE_API}/portfolio-projects?slug=${slug}`);
  const errors: string[] = [];
  const project = await res.json();
  if (!project || project[0].slug !== slug) {
    return {
      notFound: true,
    };
  }
  let previousProject;
  let nextProject;
  try {
    const prevRes = await fetch(`${process.env.BASE_API}/portfolio-projects?rank=${project[0].rank - 1}`);
    previousProject = prevRes ? await prevRes.json() : [];
  } catch (error: any) {
    errors.push(error.message);
  }
  try {
    const nextRes = await fetch(`${process.env.BASE_API}/portfolio-projects?rank=${project[0].rank + 1}`);
    nextProject = nextRes ? await nextRes.json() : [];
  } catch (error: any) {
    errors.push(error.message);
  }
  console.log(errors);

  return {
    props: {
      previousProject: previousProject?.[0] || {},
      project: project[0],
      nextProject: nextProject?.[0] || {},
    },
  };
}

export default ProjectDetails;
