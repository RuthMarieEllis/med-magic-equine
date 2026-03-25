import { useState, useMemo } from 'react'
import { categories, medications } from '../data/medications'

export default function App() {
  const [search, setSearch]               = useState('')
  const [activeCategory, setActiveCategory] = useState(null)
  const [activeMedication, setActiveMedication] = useState(null)
  const [expandedMeds, setExpandedMeds]   = useState({})

  const isSearching = search.trim().length >= 2

  const medicationsWithCategory = useMemo(() =>
    medications.map(med => ({
      ...med,
      category: categories.find(c => c.id === med.categoryId),
    }))
  , [])

  const searchResults = useMemo(() => {
    if (!isSearching) return []
    const q = search.trim().toLowerCase()
    return medicationsWithCategory.filter(med =>
      med.name.toLowerCase().includes(q) ||
      med.brandNames.some(b => b.toLowerCase().includes(q)) ||
      med.description.toLowerCase().includes(q) ||
      med.uses.some(u => u.toLowerCase().includes(q))
    )
  }, [search, isSearching, medicationsWithCategory])

  function toggleMed(id) {
    setExpandedMeds(prev => ({ ...prev, [id]: !prev[id] }))
  }

  function handleSearch(val) {
    setSearch(val)
    if (val.trim().length >= 2) {
      setActiveCategory(null)
      setActiveMedication(null)
    }
  }

  function openCategory(cat) {
    setActiveCategory(cat)
    setActiveMedication(null)
    setExpandedMeds({})
  }

  function openMedication(med) {
    setActiveMedication(med)
  }

  const categoryMeds = useMemo(() => {
    if (!activeCategory) return []
    return medicationsWithCategory.filter(m => m.categoryId === activeCategory.id)
  }, [activeCategory, medicationsWithCategory])

  return (
    <div className="min-h-screen bg-mm-cream">

      {/* ── Mobile header ── */}
      <header className="lg:hidden bg-mm-dark flex items-center gap-3 px-4 py-3 shadow-md sticky top-0 z-50">
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Med Magic Equine"
          className="h-10 w-10 object-contain"
          onError={e => e.target.style.display = 'none'}
        />
        <p className="text-mm-gold text-xs italic">Equine medications, clearly explained.</p>
      </header>

      {/* ── Page layout ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">

        {/* ── Container (sidebar + content combined) ── */}
        <div className="bg-white rounded-2xl shadow-md border border-mm-cream-dark flex items-stretch gap-3 p-3">

          {/* ── Sidebar ── */}
          <aside className="hidden lg:flex flex-col items-center w-56 xl:w-64 bg-mm-dark rounded-2xl py-8 px-5 shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Med Magic Equine"
              className="w-full object-contain mb-6"
              onError={e => e.target.style.display = 'none'}
            />
            <div className="flex items-center gap-3 w-full mb-6">
              <div className="flex-1 h-px bg-mm-gold opacity-40" />
              <span className="text-mm-gold text-xs">✦</span>
              <div className="flex-1 h-px bg-mm-gold opacity-40" />
            </div>
            <p className="text-white/50 text-xs text-center italic leading-relaxed">
              For reference only. Always consult a licensed veterinarian before administering any medication.
            </p>
            <div className="mt-auto text-white/20 text-xs text-center">© Med Magic Equine</div>
          </aside>

          {/* ── Main content ── */}
          <main className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1">

              {/* Header band */}
              <div className="bg-mm-dark rounded-2xl px-6 sm:px-8 pt-8 pb-7">
                <div className="mb-5">
                  <h1 className="text-mm-gold font-bold text-2xl sm:text-3xl leading-tight tracking-tight">
                    Med Magic Equine
                  </h1>
                  <p className="text-white/60 text-sm mt-1 italic">
                    Equine medications — uses, dosages, and interactions, at a glance.
                  </p>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-mm-dark text-lg select-none">
                    🔍
                  </span>
                  <input
                    type="text"
                    value={search}
                    onChange={e => handleSearch(e.target.value)}
                    placeholder="Search medications, brand names, or uses…"
                    className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mm-gold text-base shadow-sm border-0"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              <div className="p-6 sm:p-8">

                {/* ── SEARCH RESULTS ── */}
                {isSearching && (
                  <div>
                    <p className="text-sm text-gray-500 italic mb-4">
                      {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} for &ldquo;{search.trim()}&rdquo;
                    </p>

                    {searchResults.length === 0 ? (
                      <div className="bg-white rounded-xl p-10 text-center shadow-sm border border-mm-cream-dark">
                        <p className="text-4xl mb-3">🐴</p>
                        <p className="text-gray-500 font-medium">No results for &ldquo;{search}&rdquo;</p>
                        <p className="text-gray-400 text-sm mt-1">Try a brand name, drug class, or condition</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {searchResults.map(med => (
                          <MedCard
                            key={med.id}
                            med={med}
                            isOpen={!!expandedMeds[med.id]}
                            onToggle={() => toggleMed(med.id)}
                            showCategory
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* ── MEDICATION DETAIL ── */}
                {!isSearching && activeMedication && (
                  <MedicationDetail
                    med={activeMedication}
                    onBack={() => setActiveMedication(null)}
                  />
                )}

                {/* ── CATEGORY VIEW ── */}
                {!isSearching && activeCategory && !activeMedication && (
                  <div>
                    <button
                      onClick={() => { setActiveCategory(null); setExpandedMeds({}) }}
                      className="mb-5 flex items-center gap-2 text-mm-crimson hover:text-mm-dark font-semibold text-sm transition-colors"
                    >
                      ← Back to Categories
                    </button>

                    <div className="rounded-xl overflow-hidden shadow-sm mb-6">
                      <div
                        className="px-5 py-5 flex items-center gap-4"
                        style={{ backgroundColor: activeCategory.color }}
                      >
                        <span className="text-4xl">{activeCategory.icon}</span>
                        <div>
                          <h2 className="text-white font-bold text-xl leading-tight">
                            {activeCategory.name}
                          </h2>
                          <p className="text-white/75 text-sm mt-0.5">
                            {activeCategory.description}
                          </p>
                        </div>
                      </div>
                      <div className="h-1 bg-mm-gold" />
                    </div>

                    <div className="space-y-2">
                      {categoryMeds.map(med => (
                        <MedCard
                          key={med.id}
                          med={med}
                          isOpen={!!expandedMeds[med.id]}
                          onToggle={() => toggleMed(med.id)}
                          categoryColor={activeCategory.color}
                          onViewFull={() => openMedication(med)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* ── HOME — CATEGORY GRID ── */}
                {!isSearching && !activeCategory && !activeMedication && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-xs font-bold tracking-widest text-mm-gold-dark uppercase whitespace-nowrap">
                        Browse by Category
                      </span>
                      <div className="flex-1 h-px bg-mm-cream-dark" />
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 flex gap-3 items-start">
                      <span className="text-amber-500 text-lg flex-shrink-0 mt-0.5">⚠️</span>
                      <p className="text-amber-800 text-xs leading-relaxed">
                        <strong>For reference only.</strong> Always consult a licensed veterinarian before administering any medication to your horse. Dosages and indications may vary based on individual patient factors.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                      {categories.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => openCategory(cat)}
                          className="bg-white rounded-xl px-4 py-4 text-left shadow-sm hover:shadow-md transition-all duration-150 border border-mm-cream-dark border-l-4 hover:-translate-y-0.5"
                          style={{ borderLeftColor: cat.color }}
                        >
                          <div className="text-2xl mb-2">{cat.icon}</div>
                          <h3 className="font-bold text-gray-800 text-sm leading-snug">{cat.name}</h3>
                          <p className="text-gray-400 text-xs mt-1">
                            {medications.filter(m => m.categoryId === cat.id).length} medications
                          </p>
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 mt-10">
                      <div className="flex-1 h-px bg-mm-cream-dark" />
                      <span className="text-mm-gold text-sm">✦</span>
                      <div className="flex-1 h-px bg-mm-cream-dark" />
                    </div>
                  </div>
                )}

              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  )
}

/* ── Med Card (accordion) ─────────────────────────────────────────────────── */
function MedCard({ med, isOpen, onToggle, showCategory, categoryColor, onViewFull }) {
  const color = categoryColor ?? med.category?.color ?? '#935D2A'
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border transition-all duration-150
        ${isOpen ? 'border-l-4 shadow-md border-mm-cream-dark' : 'border-mm-cream-dark hover:shadow-md'}`}
      style={isOpen ? { borderLeftColor: color } : {}}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-4 py-3.5 flex items-center justify-between gap-3"
      >
        <div className="flex items-start gap-3 min-w-0 flex-1">
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`font-semibold text-sm ${isOpen ? 'text-gray-900' : 'text-gray-700'}`}>
                {med.name}
              </span>
              {med.rxRequired && (
                <span className="text-xs bg-mm-crimson/10 text-mm-crimson font-semibold px-2 py-0.5 rounded-full flex-shrink-0">
                  Rx
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              {med.brandNames.slice(0, 3).join(', ')}
              {med.brandNames.length > 3 && ' …'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {showCategory && med.category && (
            <span
              className="text-xs px-2.5 py-1 rounded-full text-white font-semibold hidden sm:inline-block"
              style={{ backgroundColor: med.category.color }}
            >
              {med.category.icon} {med.category.name}
            </span>
          )}
          <span
            className="text-base transition-transform duration-200"
            style={{
              color,
              transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          >
            ›
          </span>
        </div>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 pt-0">
          <div className="border-t border-gray-100 pt-3 space-y-3">
            <p className="text-gray-600 text-sm leading-relaxed">{med.description}</p>

            {/* Uses */}
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Common Uses</p>
              <ul className="space-y-1">
                {med.uses.map((u, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-mm-crimson flex-shrink-0 mt-0.5">•</span>
                    {u}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dosage */}
            <div className="bg-blue-50 rounded-lg px-3 py-2.5">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">Dosage Guide</p>
              <p className="text-blue-900 text-sm leading-relaxed">{med.dosage}</p>
            </div>

            {/* Contraindications */}
            {med.contraindications?.length > 0 && (
              <div className="bg-red-50 rounded-lg px-3 py-2.5">
                <p className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1.5">⚠️ Contraindications</p>
                <ul className="space-y-1">
                  {med.contraindications.map((c, i) => (
                    <li key={i} className="flex gap-2 text-sm text-red-800">
                      <span className="flex-shrink-0 mt-0.5">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Drug Interactions */}
            {med.interactions?.length > 0 && (
              <div className="bg-amber-50 rounded-lg px-3 py-2.5">
                <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1.5">🔄 Drug Interactions</p>
                <ul className="space-y-1">
                  {med.interactions.map((x, i) => (
                    <li key={i} className="flex gap-2 text-sm text-amber-900">
                      <span className="flex-shrink-0 mt-0.5">•</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Warnings */}
            {med.warnings?.length > 0 && (
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Warnings</p>
                <ul className="space-y-1">
                  {med.warnings.map((w, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-600">
                      <span className="flex-shrink-0 mt-0.5 text-amber-500">!</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Forms */}
            {med.forms?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {med.forms.map((f, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
                    {f}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

/* ── Medication Detail Page ───────────────────────────────────────────────── */
function MedicationDetail({ med, onBack }) {
  const color = med.category?.color ?? '#935D2A'
  return (
    <div>
      <button
        onClick={onBack}
        className="mb-5 flex items-center gap-2 text-mm-crimson hover:text-mm-dark font-semibold text-sm transition-colors"
      >
        ← Back
      </button>

      <div className="rounded-xl overflow-hidden shadow-sm mb-6">
        <div className="px-5 py-5 flex items-center justify-between gap-4" style={{ backgroundColor: color }}>
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-white font-bold text-xl leading-tight">{med.name}</h2>
              {med.rxRequired && (
                <span className="bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full">Rx Required</span>
              )}
            </div>
            <p className="text-white/75 text-sm mt-1">{med.brandNames.join(', ')}</p>
          </div>
          {med.category && (
            <span className="text-3xl flex-shrink-0">{med.category.icon}</span>
          )}
        </div>
        <div className="h-1 bg-mm-gold" />
      </div>

      <div className="space-y-4">
        <p className="text-gray-700 text-sm leading-relaxed">{med.description}</p>

        <Section title="Common Uses" color={color}>
          <ul className="space-y-1.5">
            {med.uses.map((u, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <span style={{ color }} className="flex-shrink-0 mt-0.5 font-bold">•</span>
                {u}
              </li>
            ))}
          </ul>
        </Section>

        <div className="bg-blue-50 rounded-xl px-4 py-4 border border-blue-100">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">Dosage Guide</p>
          <p className="text-blue-900 text-sm leading-relaxed">{med.dosage}</p>
        </div>

        {med.forms?.length > 0 && (
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Available Forms</p>
            <div className="flex flex-wrap gap-2">
              {med.forms.map((f, i) => (
                <span key={i} className="text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">
                  {f}
                </span>
              ))}
            </div>
          </div>
        )}

        {med.contraindications?.length > 0 && (
          <div className="bg-red-50 rounded-xl px-4 py-4 border border-red-100">
            <p className="text-xs font-bold text-red-700 uppercase tracking-wider mb-2">⚠️ Contraindications</p>
            <ul className="space-y-2">
              {med.contraindications.map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-red-800">
                  <span className="flex-shrink-0 mt-0.5">•</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        {med.interactions?.length > 0 && (
          <div className="bg-amber-50 rounded-xl px-4 py-4 border border-amber-100">
            <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">🔄 Drug Interactions</p>
            <ul className="space-y-2">
              {med.interactions.map((x, i) => (
                <li key={i} className="flex gap-2 text-sm text-amber-900">
                  <span className="flex-shrink-0 mt-0.5">•</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        )}

        {med.warnings?.length > 0 && (
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Additional Warnings</p>
            <ul className="space-y-2">
              {med.warnings.map((w, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-600">
                  <span className="text-amber-500 flex-shrink-0 mt-0.5">!</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function Section({ title, color, children }) {
  return (
    <div className="bg-white rounded-xl px-4 py-4 shadow-sm border border-mm-cream-dark border-l-4" style={{ borderLeftColor: color }}>
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{title}</p>
      {children}
    </div>
  )
}
