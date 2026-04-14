import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">OPME App</h1>
          <div className="space-x-4">
            <Link href="/auth/login" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Login
            </Link>
            <Link href="/auth/signup" className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Automatizează completarea OPME</h2>
          <p className="text-xl text-gray-600">Completează automat ordinele de plată multiplu electronice cu OCR și inteligență artificială.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl mb-4">📤</div>
            <h3 className="text-xl font-bold mb-2">Upload Factură</h3>
            <p className="text-gray-600">Încarcă facturile PDF și extrage automat beneficiar, IBAN, sumă.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl mb-4">🔨</div>
            <h3 className="text-xl font-bold mb-2">Builder OPME</h3>
            <p className="text-gray-600">Completează manual OPME-uri cu validare automată conform ANAF.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-bold mb-2">Depunere ANAF</h3>
            <p className="text-gray-600">Semnează electronic și depune direct la ANAF cu confirmare.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/auth/signup" className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">
            Încearcă Gratuit
          </Link>
        </div>
      </main>
    </div>
  )
}