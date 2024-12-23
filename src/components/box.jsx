import React from 'react'

const box = ({ data }) => {

  return (
    <div
      className="group p-1 text-white border-2 flex flex-col justify-self-end w-full transition-all duration-1100 ease-in-out"
      style={{
        gridRow: data.gridRow,
        gridColumn: data.gridColumn,
        borderColor: data.border, // Initial border color
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = data.border; // Background takes the border color
        // Change text color conditionally
        if (['rgb(36, 228, 145)', 'rgb(94, 173, 28)', 'rgb(42, 200, 227)'].includes(data.border)) {
          e.currentTarget.style.color = 'black'; // Set text color to black for these colors
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent'; // Restore background color
        e.currentTarget.style.color = 'white'; // Restore text color
      }}
    >
      <section className="flex justify-between">
        <div className="flex flex-col justify-between">
          <h5>{data.z}</h5>

          {/* Smoothly reveal this content */}
          <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
            <h6 className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              {data.bt}
            </h6>
          </div>

          <h3 className='drop-shadow-[4px_4px_2px_rgba(0,0,144,0.8)]'>{data.sign}</h3>
        </div>

        <span className="flex flex-col text-sm">
          <h5>{data.a}</h5>

          {/* Smoothly reveal this content */}
          <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out">
            <h6 className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              {data.st}
            </h6>
          </div>

          <h5>{data.en}</h5>
        </span>
      </section>

      {/* Smoothly reveal this paragraph */}
      <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out">
        <p className="text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
          {data.fname}
        </p>
      </div>
    </div>

  )
}

export default box
