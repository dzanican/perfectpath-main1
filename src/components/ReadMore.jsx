import Image from 'next/image'
import ATSImage from '../assets/Element.png'
import PlaceholderImage from '../assets/Elemen1t.png'

const SkillGap = () => {
  return (
    <div className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <h1 className="text-4xl text-center md:text-left lg:text-left md:text-7xl font-bold">
              100%  {" "}
              <span className="relative z-10 inline-block">
              Your Data
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
            <p className="text-lg text-center md:text-left lg:text-left">
              Identify missing skills for desired roles and get custom tailored training resources.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors w-fit mt-4 mx-auto md:mx-0">
              Read more →
            </button>
          </div>

          <div className="w-full md:w-1/2">
            <Image
              src={PlaceholderImage}
              alt="Skill Gap Analysis visualization"
              width={500}
              height={500}
              className="w-full max-w-[400px] mx-auto md:max-w-[600px] lg:max-w-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillGap
