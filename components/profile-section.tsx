import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfileSection() {
  return (
    <Card className="mb-8 border-none shadow-md dark:bg-slate-800">
      <CardHeader className="bg-[#ffc107] text-[#2d3e50] dark:text-[#1a2533]">
        <CardTitle className="text-2xl">PROFILE</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 dark:text-slate-200">
        <p className="text-gray-700 dark:text-slate-300">
          Dynamic and result-driven hospitality professional with over 10 years of experience in front office operations,
customer service, and team supervision. Proven ability to adapt to diverse environments, lead high-performing teams, and
deliver exceptional guest experience. Fluent in Spanish, English and Portuguese, with international work experience in 
Ireland and Paraguay.</p>
      </CardContent>
    </Card>
  )
}
