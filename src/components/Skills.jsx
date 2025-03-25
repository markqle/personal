import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "./globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
  FaChartBar,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiApacheairflow,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiMysql,
  SiTableau,
  SiPandas,
  SiNumpy,
  SiApachespark,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiN8N,
  SiAlteryx,
  SiLooker,
  SiQlik,
  SiHuggingface,
  
} from "react-icons/si";
import { TbBrandVscode, TbBrandDatabricks, TbBrandAzure } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";
import { PiOpenAiLogoLight } from "react-icons/pi";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Data Analytics",
      color: "text-blue-400",
      skills: [
        { 
          name: "Power BI", icon: <FaChartBar className="w-4 h-4 text-[#f0c811]" /> },
        {
          name: "Tableau",
          icon: <SiTableau className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: "Pandas",
          icon: <SiPandas className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Numpy",
          icon: <SiNumpy className="w-4 h-4 text-[#4e76ce]" />,
        },
        {
          name: "Alteryx",
          icon: <SiAlteryx className="w-4 h-4 text-[#0089bd]" />,
        },
        {
          name: "Looker",
          icon: <SiLooker className="w-4 h-4 text-[#0089bd]" />,
        },
        {
          name: "Qlik",
          icon: <SiQlik className="w-4 h-4 text-[#009c4d]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Data Engineering",
      color: "text-green-400",
      skills: [
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        { 
          name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "Databricks",
          icon: <TbBrandDatabricks className="w-4 h-4 text-[#ef3b2a]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        
        {
          name: "Airflow",
          icon: <SiApacheairflow className="w-4 h-4 text-blue" />,
        },
        {
          name: "n8n",
          icon: <SiN8N className="w-4 h-4 text-[#ea4b71]" />,
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "GraphQL",
          icon: <SiGraphql className="w-4 h-4 text-[#e435aa]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: "Machine Learning & AI",
      color: "text-purple-400",
      skills: [
        { name: "scikit-learn", icon: <SiScikitlearn className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: "Spark",
          icon: <SiApachespark className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "TensorFlow",
          icon: <SiTensorflow className="w-4 h-4 text-[#ff8500]" />,
        },
        {
          name: "Pytorch",
          icon: <SiPytorch className="w-4 h-4 text-[#ee4c2c]" />,
        },
        {
          name: "Keras",
          icon: <SiKeras className="w-4 h-4 text-[#d00000]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        {
          name: "Azure",
          icon: <TbBrandAzure className="w-4 h-4 text-[#326CE5]" />,
        },
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        { name: "CI/CD", icon: <FcWorkflow className="w-4 h-4" /> },
        
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
        },
        { name: "OpenAI", icon: <PiOpenAiLogoLight className="w-4 h-4 text-white" /> },
        { name: "Hugging Face", icon: <SiHuggingface className="w-4 h-4 text-[#ffd21d]" /> },
      ],
    },
    // {
    //   icon: Paintbrush,
    //   title: "Creative Skills",
    //   color: "text-yellow-400",
    //   skills: [
    //     {
    //       name: "UI Animation",
    //       icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" />,
    //     },
    //     {
    //       name: "SVG Animation",
    //       icon: <MdAnimation className="w-4 h-4 text-[#00C853]" />,
    //     },
    //     {
    //       name: "3D Modeling",
    //       icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" />,
    //     },
    //     {
    //       name: "Motion Graphics",
    //       icon: <MdAnimation className="w-4 h-4 text-[#FF6D00]" />,
    //     },
    //   ],
    // },
  ];

  return (
    <main
      className="pt-15 lg:pt-0 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90
 text-white min-h-screen"
    >
      <section className="container mx-auto px-4 py-11">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
