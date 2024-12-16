import { Button } from "@/components/ui/button"

interface CaseStudy {
  id: string
  name: string
}

interface CaseStudiesNavProps {
  cases: CaseStudy[]
}

export function CaseStudiesNav({ cases }: CaseStudiesNavProps) {
  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-4 py-4">
          {cases.map((caseStudy) => (
            <Button
              key={caseStudy.id}
              variant="ghost"
              onClick={() => {
                document.getElementById(caseStudy.id)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {caseStudy.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

