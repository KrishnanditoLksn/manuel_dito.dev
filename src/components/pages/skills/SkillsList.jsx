import SkillsList from "../../data/SkillsData.jsx";

const SkillList = () => {
    return SkillsList.map(
        (skill) => {
            return (
                <div key={skill.name} className="ml-46 place-items-center grid grid-cols-1.5 gap-0.5">
                    <div className="">
                        <h1 className="text-2xl font-bold">{skill.name}</h1>
                    </div>
                    <div>
                        <img className="w-60 h-60 rounded-lg" src={skill.src} alt="">
                        </img>
                    </div>
                </div>
            )
        }
    )
}

export default SkillList