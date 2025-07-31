type Props = { highlightsOnly?: boolean };

export default function WorkSection({ highlightsOnly }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-8">
      <h2 className="text-2xl font-bold mb-3 text-blue-700">Work Experience</h2>
      <ul className="space-y-4">
        <li>
          <div className="font-bold text-gray-900">PharmaSecure</div>
          <div className="text-sm text-gray-500 mb-1">Associate Product Manager</div>
          <div className="text-gray-700">
            Automated 6+ departments, delivered projects 25% under budget, and built real-time fraud detection with AI/ML.
          </div>
        </li>
        {!highlightsOnly && (
          <li>
            <div className="font-bold text-gray-900">CSIO (Govt. of India)</div>
            <div className="text-sm text-gray-500 mb-1">Project & Product Associate</div>
            <div className="text-gray-700">
              Developed hybrid NILM models for smart utilities, led Tricity's IoT water quality & loss detection system.
            </div>
          </li>
        )}
        {/* ...Add more jobs as needed */}
      </ul>
      {highlightsOnly && (
        <a
          href="/work"
          className="mt-4 inline-block text-blue-600 hover:underline font-medium"
        >
          See full work experience →
        </a>
      )}
    </div>
  );
}
