import Image from 'next/image'
import ATSImage from '../assets/Element.png'
import PlaceholderImage from '../assets/Apps.png'
import PlaceholderImage2 from '../assets/Elem2ent.png'

const SkillGap = () => {
  return (
    <div className="relative bg-[#003366] text-white px-4 py-16">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={PlaceholderImage2}   
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src={PlaceholderImage}
              alt="Skill Gap Analysis visualization"
              width={400}
              height={400}
              className="w-full max-w-[500px] mx-auto"
            />
          </div>

          <div className="flex flex-col gap-4 w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing
              <span className="relative z-10 inline-block">
                <Image
                  src={ATSImage}
                  alt=""
                  width={200}
                  height={20}
                  className="absolute -bottom-1 left-0 md:left-8 -z-10 w-full opacity-100"
                  style={{ width: '150%' }}
                />
              </span>
            </h1>
            <p className="text-lg">
              Identify missing skills for desired roles and get custom tailored training resources.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors w-fit mt-4">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillGap
