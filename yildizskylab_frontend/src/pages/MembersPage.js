import { useState } from 'react';


function MembersPage() {

  const [clubs, setClubs] = useState([
    { id: 1, image: "weblab-black.jpg", name: "weblab1", members: [{ id: 100, role: "leader", name: "melih yelman", image: "https://thispersondoesnotexist.com/image" }, { id: 101, role: "member", name: "melih yelman", image: "https://thispersondoesnotexist.com/image" }, { id: 102, role: "member", name: "ahmet deniz", image: "https://thispersondoesnotexist.com/image" }] },
    { id: 2, image: "weblab-black.jpg", name: "weblab2", members: [{ id: 103, role: "leader", name: "ahmet ahmet", image: "https://thispersondoesnotexist.com/image" }, { id: 104, role: "member", name: "meehmet mehmeht", image: "https://thispersondoesnotexist.com/image" }, { id: 101, role: "member", name: "cem cem", image: "https://thispersondoesnotexist.com/image" }] },
    { id: 3, image: "weblab-black.jpg", name: "weblab3", members: [{ id: 104, role: "leader", name: "abc abc", image: "https://thispersondoesnotexist.com/image" }, { id: 105, role: "member", name: "melih yelman", image: "https://thispersondoesnotexist.com/image" }, { id: 106, role: "member", name: "ahmet deniz", image: "https://thispersondoesnotexist.com/image" }] },
    { id: 4, image: "weblab-black.jpg", name: "weblab4", members: [{ id: 109, role: "leader", name: "melih yelman", image: "https://thispersondoesnotexist.com/image" }, { id: 108, role: "member", name: "ayşe ayşe", image: "https://thispersondoesnotexist.com/image" }, { id: 107, role: "member", name: "csa wqe", image: "https://thispersondoesnotexist.com/image" }] },
    { id: 5, image: "weblab-black.jpg", name: "weblab5", members: [{ id: 110, role: "leader", name: "fatma yelman", image: "https://thispersondoesnotexist.com/image" }, { id: 111, role: "member", name: "irem irem", image: "https://thispersondoesnotexist.com/image" }, { id: 121, role: "member", name: "ahmet deniz", image: "https://thispersondoesnotexist.com/image" }] },
    { id: 6, image: "weblab-black.jpg", name: "weblab6", members: [{ id: 120, role: "leader", name: "egemen egemen", image: "https://thispersondoesnotexist.com/image" }, { id: 131, role: "member", name: "hayriye hayriye", image: "https://thispersondoesnotexist.com/image" }, { id: 141, role: "member", name: "ahmet deniz", image: "https://thispersondoesnotexist.com/image" }] },
    { id: 7, image: "weblab-black.jpg", name: "weblab7", members: [{ id: 140, role: "leader", name: "melih irem", image: "https://thispersondoesnotexist.com/image" }, { id: 201, role: "member", name: "melih abc", image: "https://thispersondoesnotexist.com/image" }, { id: 181, role: "member", name: "mehmet deniz", image: "https://thispersondoesnotexist.com/image" }] },
    { id: 8, image: "weblab-black.jpg", name: "weblab8", members: [{ id: 150, role: "leader", name: "irem yelman", image: "https://thispersondoesnotexist.com/image" }, { id: 301, role: "member", name: "abc yelman", image: "https://thispersondoesnotexist.com/image" }, { id: 191, role: "member", name: "ahmet can", image: "https://thispersondoesnotexist.com/image" }] }
  ])
  const [activeClubId, setActiveClubId] = useState(1)

  const clubInfo = clubs.find(club => club.id === activeClubId)

  return (
    <div >
      <div className='bg-gray-200 mt-24 gap-6 py-4 px-6 rounded-md container mx-auto flex justify-center items-center flex-wrap'>
        {clubs.map(club => (
          <div onClick={() => setActiveClubId(club.id)} key={club.id} className={`w-16 h-16 ${club.id !== activeClubId ? "opacity-50" : "opacity-100"} hover:opacity-100 border border-gray-500 cursor-pointer rounded-md p-px flex items-center justify-center`}>
            <img className='w-12 h-12 rounded-full' src={club.image} alt='skylab' />
          </div>
        ))}
      </div>

      <div className='container mx-auto flex justify-center items-center my-4 flex-col gap-4 md:gap-8'>

        <h2 className='font-bold text-3xl py-2'>{clubInfo.name}</h2>

        <div className='w-full md:w-[calc(33%-4rem)] h-64 cursor-pointer group perspective '>
              <div className='relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-700'>
                <div className='backface-hidden absolute h-full w-full flex flex-col gap-4 justify-center items-center border px-10 py-2 rounded-md shadow-sm'>
                  <img className='w-24 h-24 rounded-full' src={clubInfo.members[0].image} alt='person' />
                  <h3 className='font-bold text-2xl'>{clubInfo.members[0].role}</h3>
                  <p>{clubInfo.members[0].name}</p>
                </div>

                <div className='absolute rotate-y-180 backface-hidden w-full h-full flex-col gap-4 justify-center items-center border px-10 py-2 rounded-md shadow-sm'>
                  asdgas
                </div>
              </div>
            </div>

        <div className='w-full h-px bg-slate-200 my-2'></div>

        <div className='w-full flex flex-wrap flex-col md:flex-row items-center justify-center gap-4 pb-4'>

          {clubInfo.members.slice(1).map(member => (
            <div key={member.id} className='w-full md:w-[calc(33%-4rem)] h-64 cursor-pointer group perspective'>
              <div className='relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-700'>
                <div className='backface-hidden absolute h-full w-full flex flex-col gap-4 justify-center items-center border px-10 py-2 rounded-md shadow-sm'>
                  <img className='w-24 h-24 rounded-full' src={member.image} alt='person' />
                  <h3 className='font-bold text-2xl'>{member.role}</h3>
                  <p>{member.name}</p>
                </div>

                <div className='absolute rotate-y-180 backface-hidden w-full h-full flex-col gap-4 justify-center items-center border px-10 py-2 rounded-md shadow-sm'>
                  asdgas
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default MembersPage;