import React from 'react'


const Scores = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Match Scores</h1>
      <table>
        <thead>
          <tr>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Team A</td>
            <td>Team B</td>
            <td>1 - 2</td>
          </tr>
          <tr>
            <td>Team C</td>
            <td>Team D</td>
            <td>3 - 1</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-8">
        <p className="mt-4 text-gray-600">More scores coming soon!</p>
      </div>
    </div>
    </>
  )
}

export default Scores