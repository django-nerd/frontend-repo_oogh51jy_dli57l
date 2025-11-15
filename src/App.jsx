import { useState } from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  const [status, setStatus] = useState('')
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const pingBackend = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/hello`)
      const data = await res.json()
      setStatus(data?.message || 'Connected')
    } catch (e) {
      setStatus('Could not reach backend')
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Hero with Spline cover */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlay for contrast (does not block interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40" />

        {/* Copy overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-md">
                Build modern apps faster with a playful 3D vibe
              </h1>
              <p className="mt-4 md:mt-6 text-white/90 text-base md:text-lg">
                A colorful 3D assembly line showcasing technology, interfaces, and geometric shapes — powered by an AI dev environment.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={pingBackend}
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 transition-colors"
                >
                  Check Backend Connectivity
                </button>
                {status && (
                  <span className="text-white/95 bg-white/10 backdrop-blur px-3 py-2 rounded-md">
                    {status}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="container mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold">Fast API Backend</h3>
            <p className="mt-2 text-gray-600">Ready-to-use endpoints with CORS enabled and MongoDB integration.</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold">React + Tailwind UI</h3>
            <p className="mt-2 text-gray-600">Modern components and a Spline-powered hero cover for instant polish.</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold">Live Preview</h3>
            <p className="mt-2 text-gray-600">Hot-reload development and shareable preview links.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
