import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year_started: 2023,
        year_completed: "Present",
        employer: "Goldsmiths University of London",
        title: "Teaching Assistant",
        details: "In my role, I've significantly simplified complex programming concepts, making them accessible to students through practical examples and analogies. This approach has improved student comprehension and engagement. My management of computer labs has fostered an environment that enhances students' practical skills, evidenced by improved problem-solving abilities. I've offered personalised guidance as a mentor, contributing to higher course completion rates. My feedback on assignments has deepened students' understanding of programming principles, leading to better-quality submissions. Collaborating with faculty, I've co-developed new academic content, resulting in innovative research publications. My classroom management strategies have ensured efficient and productive learning environments. I've addressed IT issues and maintained educational continuity by providing technical support. Notably, I led the development of an interactive learning platform, boosting student engagement by 25%, a testament to my commitment to enhancing educational outcomes."
    },
    {
        year_started: 2009,
        year_completed: 2022,
        employer: "Wilson James Ltd, Ultimate Security Ltd, Unitrust Ltd",
        title: "Security officer, Security team supervisor, Security Team Leader, Control Room Operator",
        details: "Monitor and authorize entrance and departure of employees, visitors, and other persons. Mobile patrol duties performances and quick response driver duties, control members of security staff, shift rota formation, performing security officers training, Operation of metal detecting devices to screen individuals and prevent passage of prohibited articles into restricted areas, (walk through metal detector and handheld metal detector), Operating x-ray machines, “Itemiser” (drugs and explosive devices threat detector), Control Room Operator in the Olympic Village. I was responsible for dealing with various types of incidents over the entire an Olympic Village, writing incident reports, key’s management, facilitating hundreds of daily deliveries and access requests, liaising with emergency services, working closely with multiple tiers of management, police, fire and medical services."
    },
    {
        year_started: 2006,
        year_completed: 2009,
        employer: "Riga Police Department, Informatics and Communication Department, Riga, Latvian Republic",
        title: "Senior Inspector",
        details: "Administration of computer networks, DHCP and video surveillance servers in Riga Regional Police Department. Administration, repair and replacement of computer components, computer assembling, computer network installation, protection of computer networks using variable decoders."
    },
    {
        year_started: 2001,
        year_completed: 2005,
        employer: "Pre-trial Investigation Service of Road Traffic Offences Investigation Division, Riga, Latvian Republic",
        title: "Investigation Inspector",
        details: "Investigation of road-transport incidents. Incident place inspection, Search of drivers and incident place, Interviewing of suspected individuals, victims and witnesses. Cooperation with the Law and Public Safety Enforcement State Authority’ team for the proof search of any crime. The law and order protection during mass public events."
    }
]

function Work() {
    return (
        <div id="work" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
           <h1 className='text-4xl font-bold text-center mb-6 text-[#001b5e]'>Work Experience</h1> 
           {data.map((item, index) => 
               ( <WorkItem 
                 key={index}
                 year_started={item.year_started}
                 year_completed={item.year_completed}
                 employer = {item.employer}
                 title ={item.title}
                 details = {item.details}  />
           ))}
        </div>
    );
};

export default Work
