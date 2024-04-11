import Contact from "./sections/resume-left-column/Contact";
import Hobbies from "./sections/resume-left-column/Hobbies";
import Languages from "./sections/resume-left-column/Languages";
import Photo from "./sections/resume-left-column/Photo";
import Skills from "./sections/resume-left-column/Skills";
import About from "./sections/resume-right-column/About";
import Education from "./sections/resume-right-column/Education";
import Experience from "./sections/resume-right-column/Experience";
import ResumeTitle from "./sections/resume-right-column/ResumeTitle";

export default function Resume() {
    return (
        <section className="resume mx-auto w-full max-w-2xl">
            <section className="resume-columns flex flex-row">
                <section className="resume-left-column w-1/3 flex flex-col p-4 gap-4">
                    <Photo />
                    <Contact />
                    <Skills />
                    <Languages />
                    <Hobbies />
                </section>
                <section className="resume-left-column w-2/3 flex flex-col p-4 gap-4">
                    <ResumeTitle />
                    <About />
                    <Experience />
                    <Education />
                </section>
            </section>
        </section>
    )
    
}