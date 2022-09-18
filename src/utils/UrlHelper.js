export default {
  fixParameters: (url, params) => {
    for (const [key, value] of params) {
      if(!((value==='Any' || value === '')
          || ((key === 'exploitability' || key === 'impactScore' ) && value === "0")
          ) || key === "s")
        url.searchParams.append(key, value)
    }
  }
}
