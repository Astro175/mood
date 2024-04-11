'use client'

import { createNewEntry } from "@/utils/api"
import { useRouter } from "next/navigation"


const NewEntryCard = () => {
    const router = useRouter()
    async function handleClick() {
        const { data } = await createNewEntry()
        router.push(`journal/${data.id}`)
    }
  return (
    <div
      className="overflow-hidden bg-white rounded-lg shadow cursor-pointer"
    >
      <div className="px-4 py-5 sm:p-6" onClick={handleClick}>
        <span className="text-3xl">New Entry</span>
      </div>
    </div>
  )
}
export default NewEntryCard
