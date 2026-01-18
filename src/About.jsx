


import { useState, useRef, useEffect } from "react";

import { FaGraduationCap, FaBriefcase, FaTools } from "react-icons/fa";

export default function About() {
const [open, setOpen] = useState(false);
const eduRef = useRef(null);

// Auto close Education when scrolled away
useEffect(() => {
const observer = new IntersectionObserver(
([entry]) => {
if (!entry.isIntersecting) setOpen(false);
},
{ threshold: 0.3 }
);

if (eduRef.current) observer.observe(eduRef.current);
return () => observer.disconnect();
}, []);

return (
<section className="w-full bg-gray-100 py-16">
<div className="max-w-6xl mx-auto px-6">

{/* Header */}
<div className="mb-12 text-center">
<h2 className="text-3xl md:text-4xl font-bold text-gray-800">
About Me
</h2>
<p className="text-gray-500 mt-3">
Full-Stack Developer building modern, scalable web applications
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

{/* EDUCATION */}
<div
ref={eduRef}
onClick={() => setOpen(!open)}
className={`bg-white rounded-xl p-6 shadow-lg cursor-pointer transition-all duration-500 ${
open ? "md:col-span-2" : ""
}`}
>
<h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-3">
<FaGraduationCap className="h-8 w-8 text-blue-500" />
Education
</h3>

<p className="text-gray-700 leading-relaxed">
I began my journey into web development in 2023, starting with HTML
and CSS. I later trained at{" "}
<span className="font-semibold">
Hiljima Computer Training School
</span>
, where I gained a strong foundation in JavaScript. I continued
learning React and Node.js through hands-on, real-world projects.
</p>

{/* Expandable image */}
<div
className={`overflow-hidden transition-all duration-500 ${
open ? "max-h-96 mt-6" : "max-h-0"
}`}
>
<img
src="/img/IMG_3175.jpeg"
alt="Training"
className={`w-full rounded-lg transition-all duration-500 ${
open
? "opacity-100 grayscale-0 scale-100"
: "opacity-40 grayscale scale-95"
}`}
/>
</div>

<p className="text-sm text-gray-500 mt-4 italic">
Click to view training photo
</p>
</div>

{/* EXPERIENCE */}
<div className="bg-white rounded-xl p-6 shadow-lg">
<h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-3">
<FaBriefcase className="h-8 w-8 text-blue-500" />
Experience
</h3>

<p className="text-gray-700 leading-relaxed">
Experience building responsive websites, dashboards, and web
applications. Worked on authentication systems, APIs, landing
pages, and full-stack projects using modern technologies.
</p>
</div>

{/* WHAT I USE */}
<div className="bg-white rounded-xl p-6 shadow-lg">
<h3 className="text-xl font-semibold mb-6 text-gray-700 flex items-center gap-3">
<FaTools className="h-8 w-8 text-blue-500" />
What I Use
</h3>

<div className="grid grid-cols-3 gap-4">
{[
{ name: "React", img: "/img/react.js.png" },
{ name: "Tailwind", img: "/img/twailwind.png" },
{ name: "JavaScript", img: "/img/javascript.png" },
{ name: "Node.js", img: "/img/node.png" },
{ name: "MongoDB", img: "/img/images.png" },
{ name: "Git", img: "/img/git.png" },
].map((tool) => (
<div
key={tool.name}
className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition shadow-sm"
>
<img
src={tool.img}
alt={tool.name}
className="h-10 w-10 object-contain mb-2"
/>
<span className="text-sm text-gray-700">
{tool.name}
</span>
</div>
))}
</div>
</div>

</div>
</div>
</section>
);
}