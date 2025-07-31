type Props = { highlightsOnly?: boolean };

export default function SideProjectsSection({ highlightsOnly }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-8">
      <h2 className="text-2xl font-bold mb-3 text-blue-700">Side Projects</h2>
      <ul className="space-y-3">
        <li>
          <span className="font-medium text-gray-900">AI-Driven Fraud Detection</span>
          <span className="ml-2 text-gray-600">— Built ML pipeline to detect counterfeits in pharma supply chain.</span>
        </li>
        {!highlightsOnly && (
          <li>
            <span className="font-medium text-gray-900">Tiffin Service Platform</span>
            <span className="ml-2 text-gray-600">— Launched local food delivery app for suppliers in Chandigarh.</span>
          </li>
        )}
        {/* ...Add more projects */}
      </ul>
      {highlightsOnly && (
        <a
          href="/side-projects"
          className="mt-4 inline-block text-blue-600 hover:underline font-medium"
        >
          See all side projects →
        </a>
      )}
    </div>
  );
}
