import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/box'

function App() {
  const data = [
    { sign: "H", fname: "Hydrogen", z: "1", a: "1", bt: "235", st: "225", en: "2.1", border: "rgb(94, 173, 28)"},
    { sign: "He", fname: "Helium", z: "2", a: "4", bt: "272", st: "258", en: "0.98", border: "rgb(42, 200, 227)", gridColumn: "4 / span 2",gridRow: "span 3",m: "10px", },
    { sign: "He", fname: "Helium", z: "2", a: "4", bt: "272", st: "258", en: "0.98", border: "rgb(42, 200, 227)", gridColumn: "18" },
    { sign: "Li", fname: "Lithium", z: "3", a: "7", bt: "453", st: "336", en: "1.0", border: "rgb(238, 52, 29)"},
    { sign: "Be", fname: "Beryllium", z: "4", a: "9", bt: "1278", st: "1278", en: "1.57", border: "rgb(255, 127, 36)" },
    { sign: "B", fname: "Boron", z: "5", a: "11", bt: "4000", st: "2740", en: "2.04", border: "rgb(176, 120, 37)",gridColumn: "13" },
    { sign: "C", fname: "Carbon", z: "6", a: "12", bt: "3915", st: "3825", en: "2.55", border: "rgb(36, 228, 145)"},
    { sign: "N", fname: "Nitrogen", z: "7", a: "14", bt: "630", st: "402", en: "3.04", border: "rgb(94, 173, 28)"},
    { sign: "O", fname: "Oxygen", z: "8", a: "16", bt: "54.36", st: "90.2", en: "3.44", border: "rgb(94, 173, 28)"},
    { sign: "F", fname: "Fluorine", z: "9", a: "19", bt: "188", st: "53", en: "3.98", border: "rgb(94, 173, 28)"},
    { sign: "Ne", fname: "Neon", z: "10", a: "20", bt: "27.58", st: "26.5", en: "0", border: "rgb(42, 200, 227)"},
    { sign: "Na", fname: "Sodium", z: "11", a: "23", bt: "1156", st: "883", en: "0.93", border: "rgb(238, 52, 29)"},
    { sign: "Mg", fname: "Magnesium", z: "12", a: "24", bt: "1380", st: "1090", en: "1.31", border: "rgb(255, 127, 36)"},
    { sign: "Al", fname: "Aluminum", z: "13", a: "27", bt: "660.32", st: "2470", en: "1.61", border: "rgb(65, 96, 127)",gridColumn: "13"  },
    { sign: "Si", fname: "Silicon", z: "14", a: "28", bt: "1414", st: "2600", en: "1.9", border: "rgb(176, 120, 37)"},
    { sign: "P", fname: "Phosphorus", z: "15", a: "31", bt: "44.1", st: "280", en: "2.19", border: "rgb(36, 228, 145)"},
    { sign: "S", fname: "Sulfur", z: "16", a: "32", bt: "115.21", st: "444", en: "2.58", border: "rgb(36, 228, 145)"},
    { sign: "Cl", fname: "Chlorine", z: "17", a: "35", bt: "-101", st: "1815", en: "3.16", border: "rgb(94, 173, 28)"},
    { sign: "Ar", fname: "Argon", z: "18", a: "40", bt: "-189.34", st: "2470", en: "0", border: "rgb(42, 200, 227)"},
    { sign: "K", fname: "Potassium", z: "19", a: "39", bt: "63.38", st: "759", en: "0.82", border: "rgb(238, 52, 29)"},
    { sign: "Ca", fname: "Calcium", z: "20", a: "40", bt: "842", st: "1484", en: "1.00", border: "rgb(255, 127, 36)"},
    { sign: "Sc", fname: "Scandium", z: "21", a: "45", bt: "1541", st: "2830", en: "1.36", border: "rgb(27, 116, 198)"},
    { sign: "Ti", fname: "Titanium", z: "22", a: "47", bt: "1668", st: "3287", en: "1.54", border: "rgb(27, 116, 198)"},
    { sign: "V", fname: "Vanadium", z: "23", a: "51", bt: "1910", st: "3407", en: "1.63", border: "rgb(27, 116, 198)"},
    { sign: "Cr", fname: "Chromium", z: "24", a: "52", bt: "1907", st: "2671", en: "1.66", border: "rgb(27, 116, 198)"},
    { sign: "Mn", fname: "Manganese", z: "25", a: "55", bt: "1244", st: "2061", en: "1.55", border: "rgb(27, 116, 198)"},
    { sign: "Fe", fname: "Iron", z: "26", a: "56", bt: "1538", st: "2861", en: "1.83", border: "rgb(27, 116, 198)"},
    { sign: "Co", fname: "Cobalt", z: "27", a: "59", bt: "1495", st: "2900", en: "1.88", border: "rgb(27, 116, 198)"},
    { sign: "Ni", fname: "Nickel", z: "28", a: "58", bt: "1455", st: "2913", en: "1.91", border: "rgb(27, 116, 198)"},
    { sign: "Cu", fname: "Copper", z: "29", a: "63", bt: "1085", st: "2562", en: "1.90", border: "rgb(27, 116, 198)"},
    { sign: "Zn", fname: "Zinc", z: "30", a: "65", bt: "419", st: "907", en: "1.65", border: "rgb(27, 116, 198)"},
    { sign: "Ga", fname: "Gallium", z: "31", a: "69", bt: "29.78", st: "2204", en: "1.81", border: "rgb(65, 96, 127)"},
    { sign: "Ge", fname: "Germanium", z: "32", a: "73", bt: "1210", st: "2833", en: "2.01", border: "rgb(176, 120, 37)"},
    { sign: "As", fname: "Arsenic", z: "33", a: "75", bt: "817", st: "614", en: "2.18", border: "rgb(176, 120, 37)"},
    { sign: "Se", fname: "Selenium", z: "34", a: "79", bt: "221", st: "685", en: "2.55", border: "rgb(36, 228, 145)"},
    { sign: "Br", fname: "Bromine", z: "35", a: "80", bt: "58.8", st: "265", en: "2.96", border: "rgb(94, 173, 28)"},
    { sign: "Kr", fname: "Krypton", z: "36", a: "84", bt: "-153.22", st: "2130", en: "0", border: "rgb(42, 200, 227)"},
    { sign: "Rb", fname: "Rubidium", z: "37", a: "85", bt: "39.31", st: "1413", en: "0.82", border: "rgb(238, 52, 29)"},
    { sign: "Sr", fname: "Strontium", z: "38", a: "87", bt: "777", st: "1413", en: "0.95", border: "rgb(255, 127, 36)"},
    { sign: "Y", fname: "Yttrium", z: "39", a: "89", bt: "1795", st: "3345", en: "1.22", border: "rgb(27, 116, 198)"},
    { sign: "Zr", fname: "Zirconium", z: "40", a: "91", bt: "1855", st: "4377", en: "1.33", border: "rgb(27, 116, 198)"},
    { sign: "Nb", fname: "Niobium", z: "41", a: "93", bt: "2477", st: "4744", en: "1.6", border: "rgb(27, 116, 198)"},
    { sign: "Mo", fname: "Molybdenum", z: "42", a: "96", bt: "2623", st: "4639", en: "2.16", border: "rgb(27, 116, 198)"},
    { sign: "Tc", fname: "Technetium", z: "43", a: "98", bt: "2157", st: "4538", en: "1.9", border: "rgb(27, 116, 198)"},
    { sign: "Ru", fname: "Ruthenium", z: "44", a: "101", bt: "2334", st: "4425", en: "2.2", border: "rgb(27, 116, 198)"},
    { sign: "Rh", fname: "Rhodium", z: "45", a: "103", bt: "1964", st: "3695", en: "2.28", border: "rgb(27, 116, 198)"},
    { sign: "Pd", fname: "Palladium", z: "46", a: "106", bt: "1555", st: "2963", en: "2.20", border: "rgb(27, 116, 198)"},
    { sign: "Ag", fname: "Silver", z: "47", a: "108", bt: "961.8", st: "2160", en: "1.93", border: "rgb(27, 116, 198)"},
    { sign: "Cd", fname: "Cadmium", z: "48", a: "112", bt: "321", st: "765", en: "1.69", border: "rgb(27, 116, 198)"},
    { sign: "In", fname: "Indium", z: "49", a: "115", bt: "156.6", st: "2072", en: "1.78", border: "rgb(65, 96, 127)"},
    { sign: "Sn", fname: "Tin", z: "50", a: "119", bt: "231.9", st: "2270", en: "1.96", border: "rgb(65, 96, 127)"},
    { sign: "Sb", fname: "Antimony", z: "51", a: "122", bt: "630", st: "1580", en: "2.05", border: "rgb(176, 120, 37)"},
    { sign: "Te", fname: "Tellurium", z: "52", a: "127.60", bt: "988", st: "449.51", en: "2.01", border: "rgb(176, 120, 37)" },
    { sign: "I", fname: "Iodine", z: "53", a: "127", bt: "113.7", st: "1845", en: "2.66", border: "rgb(94, 173, 28)"},
    { sign: "Xe", fname: "Xenon", z: "54", a: "131", bt: "-108.12", st: "2040", en: "0", border: "rgb(42, 200, 227)"},
    { sign: "Cs", fname: "Cesium", z: "55", a: "133", bt: "28.44", st: "695", en: "0.79", border: "rgb(238, 52, 29)"},
    { sign: "Ba", fname: "Barium", z: "56", a: "137", bt: "727", st: "1640", en: "0.89", border: "rgb(255, 127, 36)"},
    { sign: "", fname: "Lanthanoids", z: "57-71", a: "", bt: "", st: "", en: "", border: "rgb(114, 71, 203)" },
    { sign: "Hf", fname: "Hafnium", z: "72", a: "178", bt: "2233", st: "4603", en: "1.3", border: "rgb(27, 116, 198)"},
    { sign: "Ta", fname: "Tantalum", z: "73", a: "181", bt: "3017", st: "5731", en: "1.5", border: "rgb(27, 116, 198)"},
    { sign: "W", fname: "Tungsten", z: "74", a: "184", bt: "3422", st: "5555", en: "2.36", border: "rgb(27, 116, 198)"},
    { sign: "Re", fname: "Rhenium", z: "75", a: "186", bt: "3186", st: "5869", en: "1.9", border: "rgb(27, 116, 198)"},
    { sign: "Os", fname: "Osmium", z: "76", a: "190", bt: "3033", st: "5285", en: "2.2", border: "rgb(27, 116, 198)"},
    { sign: "Ir", fname: "Iridium", z: "77", a: "192", bt: "2446", st: "4403", en: "2.2", border: "rgb(27, 116, 198)"},
    { sign: "Pt", fname: "Platinum", z: "78", a: "195", bt: "1768", st: "3825", en: "2.28", border: "rgb(27, 116, 198)"},
    { sign: "Au", fname: "Gold", z: "79", a: "197", bt: "1064", st: "2807", en: "2.54", border: "rgb(27, 116, 198)"},
    { sign: "Hg", fname: "Mercury", z: "80", a: "201", bt: "-38.83", st: "356.73", en: "2.00", border: "rgb(27, 116, 198)"},
    { sign: "Tl", fname: "Thallium", z: "81", a: "204", bt: "304", st: "1457", en: "1.62", border: "rgb(65, 96, 127)"},
    { sign: "Pb", fname: "Lead", z: "82", a: "207", bt: "327.46", st: "1744", en: "2.33", border: "rgb(65, 96, 127)"},
    { sign: "Bi", fname: "Bismuth", z: "83", a: "209", bt: "271", st: "1560", en: "2.02", border: "rgb(65, 96, 127)"},
    { sign: "Po", fname: "Polonium", z: "84", a: "209", bt: "254", st: "962", en: "2.0", border: "rgb(65, 96, 127)"},
    { sign: "At", fname: "Astatine", z: "85", a: "210", bt: "302", st: "337", en: "2.2", border: "rgb(176, 120, 37)"},
    { sign: "Rn", fname: "Radon", z: "86", a: "222", bt: "-71", st: "202", en: "0", border: "rgb(42, 200, 227)"},
    { sign: "Fr", fname: "Francium", z: "87", a: "223", bt: "27", st: "677", en: "0.7", border: "rgb(238, 52, 29)"},
    { sign: "Ra", fname: "Radium", z: "88", a: "226", bt: "700", st: "1413", en: "0.9", border: "rgb(255, 127, 36)"},
    { sign: "", fname: "Actinoids", z: "89-103", a: "", bt: "", st: "", en: "", border: "rgb(204, 71, 162)" },
    { sign: "Rf", fname: "Rutherfordium", z: "104", a: "267", bt: "2410", st: "5800", en: "1.3", border: "rgb(27, 116, 198)"},
    { sign: "Db", fname: "Dubnium", z: "105", a: "270", bt: "2800", st: "6000", en: "1.3", border: "rgb(27, 116, 198)"},
    { sign: "Sg", fname: "Seaborgium", z: "106", a: "271", bt: "2830", st: "6000", en: "1.3", border: "rgb(27, 116, 198)"},
    { sign: "Bh", fname: "Bohrium", z: "107", a: "270", bt: "3020", st: "5900", en: "1.3", border: "rgb(27, 116, 198)"},
    { sign: "Hs", fname: "Hassium", z: "108", a: "277", bt: "2675", st: "5537", en: "1.3", border: "rgb(27, 116, 198)"},
    { sign: "Mt", fname: "Meitnerium", z: "109", a: "276", bt: "1500", st: "2500", en: "1.3", border: "rgb(27, 116, 198)"},
    { sign: "Ds", fname: "Darmstadtium", z: "110", a: "281", bt: "2800", st: "5800", en: "1.3", border: "rgb(rgb(156, 156, 156)"},
    { sign: "Rg", fname: "Roentgenium", z: "111", a: "280", bt: "2800", st: "5800", en: "1.3", border: "rgb(rgb(156, 156, 156)"},
    { sign: "Cn", fname: "Copernicium", z: "112", a: "285", bt: "2850", st: "5900", en: "1.3", border: "rgb(27, 116, 198)"},
    { sign: "NH", fname: "Nihonium", z: "113", a: "284", bt: "3000", st: "6000", en: "1.3", border: "rgb(rgb(156, 156, 156)"},
    { sign: "Fl", fname: "Flerovium", z: "114", a: "289", bt: "2900", st: "6000", en: "1.3", border: "rgb(rgb(156, 156, 156)"},
    { sign: "MC", fname: "Moscovium", z: "115", a: "288", bt: "2900", st: "6000", en: "1.3", border: "rgb(rgb(156, 156, 156)"},
    { sign: "Lv", fname: "Livermorium", z: "116", a: "293", bt: "3000", st: "6000", en: "1.3", border: "rgb(rgb(156, 156, 156)"},
    { sign: "Ts", fname: "Tennessine", z: "117", a: "294", bt: "3000", st: "6000", en: "1.3", border: "rgb(rgb(156, 156, 156)"},
    { sign: "Og", fname: "Oganesson", z: "118", a: "294", bt: "3000", st: "6000", en: "1.3", border: "rgb(rgb(156, 156, 156)"},
    { sign: "La", fname: "Lanthanum", z: "57", a: "138", bt: "920", st: "3464", en: "1.10", border: "rgb(114, 71, 203)", gridColumn: "3"},
    { sign: "Ce", fname: "Cerium", z: "58", a: "140", bt: "795", st: "3370", en: "1.12", border: "rgb(114, 71, 203)"},
    { sign: "Pr", fname: "Praseodymium", z: "59", a: "142", bt: "931", st: "3290", en: "1.13", border: "rgb(114, 71, 203)"},
    { sign: "Nd", fname: "Neodymium", z: "60", a: "144", bt: "1021", st: "3127", en: "1.14", border: "rgb(114, 71, 203)"},
    { sign: "Pm", fname: "Promethium", z: "61", a: "145", bt: "1100", st: "3000", en: "1.13", border: "rgb(204, 71, 162)"},
    { sign: "Sm", fname: "Samarium", z: "62", a: "150", bt: "1074", st: "2170", en: "1.17", border: "rgb(114, 71, 203)"},
    { sign: "Eu", fname: "Europium", z: "63", a: "152", bt: "1095", st: "1802", en: "1.2", border: "rgb(114, 71, 203)"},
    { sign: "Gd", fname: "Gadolinium", z: "64", a: "157", bt: "1313", st: "3280", en: "1.2", border: "rgb(114, 71, 203)"},
    { sign: "Tb", fname: "Terbium", z: "65", a: "159", bt: "1356", st: "3230", en: "1.1", border: "rgb(114, 71, 203)"},
    { sign: "Dy", fname: "Dysprosium", z: "66", a: "162", bt: "1407", st: "2567", en: "1.22", border: "rgb(114, 71, 203)"},
    { sign: "Ho", fname: "Holmium", z: "67", a: "164", bt: "1474", st: "2700", en: "1.23", border: "rgb(114, 71, 203)"},
    { sign: "Er", fname: "Erbium", z: "68", a: "167", bt: "1497", st: "2868", en: "1.24", border: "rgb(114, 71, 203)"},
    { sign: "Tm", fname: "Thulium", z: "69", a: "169", bt: "1529", st: "1950", en: "1.25", border: "rgb(114, 71, 203)"},
    { sign: "Yb", fname: "Ytterbium", z: "70", a: "173", bt: "819", st: "1469", en: "1.1", border: "rgb(114, 71, 203)"},
    { sign: "Lu", fname: "Lutetium", z: "71", a: "175", bt: "1656", st: "3402", en: "1.27", border: "rgb(114, 71, 203)"},
    { sign: "Ac", fname: "Actinium", z: "89", a: "227", bt: "1050", st: "3200", en: "1.1", border: "rgb(204, 71, 162)", gridColumn: "3"},
    { sign: "Th", fname: "Thorium", z: "90", a: "232", bt: "1750", st: "5061", en: "1.3", border: "rgb(204, 71, 162)"},
    { sign: "Pa", fname: "Protactinium", z: "91", a: "231", bt: "1568", st: "4027", en: "1.5", border: "rgb(204, 71, 162)"},
    { sign: "U", fname: "Uranium", z: "92", a: "238", bt: "1135", st: "4131", en: "1.38", border: "rgb(204, 71, 162)"},
    { sign: "Np", fname: "Neptunium", z: "93", a: "239", bt: "913", st: "4175", en: "1.36", border: "rgb(204, 71, 162)"},
    { sign: "Pu", fname: "Plutonium", z: "94", a: "244", bt: "640", st: "3235", en: "1.28", border: "rgb(204, 71, 162)"},
    { sign: "Am", fname: "Americium", z: "95", a: "243", bt: "1176", st: "2880", en: "1.3", border: "rgb(204, 71, 162)"},
    { sign: "Cm", fname: "Curium", z: "96", a: "247", bt: "1340", st: "3120", en: "1.3", border: "rgb(204, 71, 162)"},
    { sign: "Bk", fname: "Berkelium", z: "97", a: "247", bt: "986", st: "2627", en: "1.3", border: "rgb(204, 71, 162)"},
    { sign: "Cf", fname: "Californium", z: "98", a: "251", bt: "900", st: "1744", en: "1.3", border: "rgb(204, 71, 162)"},
    { sign: "Es", fname: "Einsteinium", z: "99", a: "252", bt: "860", st: "1130", en: "1.3", border: "rgb(204, 71, 162)"},
    { sign: "Fm", fname: "Fermium", z: "100", a: "257", bt: "1527", st: "2500", en: "1.3", border: "rgb(204, 71, 162)"},
    { sign: "Md", fname: "Mendelevium", z: "101", a: "258", bt: "827", st: "1330", en: "1.3", border: "rgb(204, 71, 162)"},
    { sign: "No", fname: "Nobelium", z: "102", a: "259", bt: "827", st: "1320", en: "1.3", border: "rgb(204, 71, 162)"},
    { sign: "Lr", fname: "Lawrencium", z: "103", a: "262", bt: "1627", st: "4000", en: "1.3", border: "rgb(204, 71, 162)"},
   
  ];




  return (
    <>
      <div className='w-screen min-h-screen h-full bg-zinc-900 m-0 p-2 rounded-lg'>
        <h1 className="text-3xl text-white text-center font-bold underline decoration-dotted">
          Periodic Table
        </h1>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))', }}>
          {data.map((item, index) => (
            <Box data={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
//responsive width 950px 