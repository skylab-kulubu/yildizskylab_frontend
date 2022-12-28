import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { clubs as initialClubs } from '../global_state/globalState';
import Footer from '../components/Footer';


function MembersPage() {
  const clubs = useRecoilValue(initialClubs)
  const [activeClubId, setActiveClubId] = useState()
  const { teamId } = useParams()

  useEffect(() => {
    (async () => {
      if (teamId) {
        setActiveClubId(teamId)
      } else {
        let rand = Math.floor(Math.random() * clubs.length)
        setActiveClubId(clubs[rand]._id)
      }
    })()
  }, [clubs])

  const clubInfo = clubs.find(club => club._id === activeClubId)

  return (
    <>
      <div className='px-2 pt-28'>
        <div className="rounded-md container mx-auto p-[2px] bg-gradient-to-r from-cyan-400/80 to-purple-200">
          <div className='bg-white rounded-md gap-6 py-4 px-6 flex justify-center items-center flex-wrap'>
            {clubs.map(club => (
              <div onClick={() => { setActiveClubId(club._id) }} key={club._id} className={`w-16 h-16 ${club._id !== activeClubId ? "opacity-50" : "opacity-100"} hover:opacity-100 border border-gray-500 cursor-pointer rounded-md p-px flex items-center justify-center`}>
                <img className='w-12 h-12 rounded-full' src={club.image} alt={club.teamName} />
              </div>
            ))}
          </div>
        </div>

        <div className='container mx-auto flex justify-center items-center mt-4 flex-col gap-4 md:gap-8'>

          <h2 className='font-bold text-3xl py-2'>{clubInfo?.teamName}</h2>

          <div className='text-center mb-4'>
            <p className=''>{clubInfo?.description}</p>
          </div>

          {clubInfo && clubInfo?.members.filter(member => member.role === "lider").map(member => (
            <div className='w-full md:w-[calc(33%-4rem)] h-64 cursor-pointer group perspective ' key={member.ref._id}>
              <div className='relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-700'>
                <div className='backface-hidden absolute h-full w-full flex flex-col gap-4 justify-center items-center border px-10 py-2 rounded-md shadow-sm'>
                  <img className='w-24 h-24 rounded-full' src={member.ref.image} alt='person' />
                  <h3 className='font-bold text-2xl'>{member.role}</h3>
                  <p>{member.ref.firstName + ' ' + member.ref.lastName}</p>
                </div>

                <div className='absolute rotate-y-180 backface-hidden w-full h-full flex gap-4 justify-center items-center border px-10 py-2 rounded-md shadow-sm'>
                  Email: {member.ref.email}
                </div>
              </div>
            </div>
          ))}

          <div className='w-full h-px bg-slate-200 my-2'></div>

          <div className='w-full flex flex-wrap flex-col md:flex-row items-center justify-center gap-4 pb-4'>

            {clubInfo && clubInfo?.members.filter(member => member.role === "asil").map(member => (
              (
                <div key={member.ref._id} className='w-full md:w-[calc(33%-4rem)] h-64 cursor-pointer group perspective'>
                  <div className='relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-700'>
                    <div className='backface-hidden absolute h-full w-full flex flex-col gap-4 justify-center items-center border px-10 py-2 rounded-md shadow-sm'>
                      <img className='w-24 h-24 rounded-full' src={member.ref.photoUrl} alt='person' />
                      <h3 className='font-bold text-2xl'>{member.role}</h3>
                      <p>{member.ref.firstName + ' ' + member.ref.lastName}</p>
                    </div>

                    <div className='absolute rotate-y-180 backface-hidden w-full h-full flex gap-4 justify-center items-center border px-10 py-2 rounded-md shadow-sm'>
                      Email: {member.ref.email}
                    </div>
                  </div>
                </div>
              )
            ))}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MembersPage;