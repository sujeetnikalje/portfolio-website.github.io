"use client";
import React,{useTransition,useState} from 'react'
import Image  from 'next/image';
import TabButton  from './TabButton';

const TAB_DATA = [
    {
        title:"skills",
        id:"skills",
        content:(
            <ul className='list-disc pl-2'>  
                <li>ReactJS</li>
                <li>MySQL</li>
                <li>.Net</li>
                <li>Java</li>
                <li>Node.js</li>
                <li>HTML,CSS,JavaScript</li>
            </ul>
        )
    },
    {
        title:"education",
        id:"education",
        content:(
            <ul className='list-disc pl-2'>
                <li>Post Graduate Diploma in Advanced Computing.</li>
                <li>CDAC,Bengaluru.</li>
                <li>PG-DAC (Full Stack Developer)</li>
                <br></br>
                <li>Bachelors Of Engineering.</li>
                <li>Shivaji University.</li>
                <li>Mechanical engineering.</li>
            </ul>
        )
    },
    {
        title:"certification",
        id:"certification",
        content:(
            <ul className='list-disc pl-2'>
                <li>CDAC PG-DAC.</li>
                <li>Sunbeam Predac Certification.</li>
                <li>SAP-PP.</li>   
            </ul>
        )
    },
]

const AboutSection = () => {

    const [tab,setTab] = useState("skills");
    const [ isPending,startTransition] = useTransition();

    const handleTabChange = (id)=>{
        startTransition(()=>{
            setTab(id);
        })
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about.png" alt='about image' width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do.I am a quick learner and I'm always looking to expand my knowledge and skills set.</p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={()=>handleTabChange("skills")} active={tab==="skills"}
                    >
                        {" "}
                        Skills{" "}
                        </TabButton>
                   

                    <TabButton selectTab={()=>handleTabChange("education")} active={tab==="education"}
                    >
                        {" "}
                        Education{" "}
                        </TabButton>
                    

                    <TabButton selectTab={()=>handleTabChange("certification")} active={tab==="certification"}
                    >
                        {" "}
                        Certification{" "}
                        </TabButton>
                    
                </div>
                <div className='mt-8'>{TAB_DATA.find((t)=>t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection