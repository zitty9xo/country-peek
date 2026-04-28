import { useState, useEffect } from 'react'

export function useCountries() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Hook logic here

  return { countries, loading, error }
}
