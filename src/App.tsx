import { useEffect, useState } from 'react'
import './App.css'
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group'
import { Label } from './components/ui/label'
import { Input } from './components/ui/input'

function App() {
  const [voltage, setVoltage] = useState<number>(12);
  const [watt, setWatt] = useState(100);
  const [amps, setAmps] = useState(8.33);

  const [lastChanged, setLastChanged] = useState("");

  let setVoltageFunc =( value:any ) => {
    setLastChanged("Voltage");

    setVoltage(value);
  } 

  let setWattFunc =( value:any ) => {
    setLastChanged("Watt");
    setWatt(value);
    
  } 

  let setAmpsFunc =( value:any ) => {
    setLastChanged("Amps");
    setAmps(value);
    
  } 


  useEffect(() => {
    if(lastChanged == "Voltage") {
      setAmps((Math.round(watt/voltage*100)/100));
    }
    if(lastChanged == "Watt") {
      setAmps((Math.round(watt/voltage*100)/100));
    }
    if(lastChanged == "Amps") {
      setWatt(Math.round(voltage*amps*100)/100);
    }
  }, [lastChanged, voltage, amps, watt])

  return (
    <>
      <div className=' text-left gap-4 flex flex-col'>
        <h1 className='font-medium text-2xl'>Volt Watt Ampere Rechner</h1>
        <p>Mit unserem Volt-Watt-Ampere-Rechner erhalten Sie ein praktisches und einfach zu bedienendes Tool, das speziell für die Planung und Berechnung von LED-Streifen-Projekten entwickelt wurde. Dieses Tool hilft Ihnen dabei, die benötigten elektrischen Werte wie Spannung (Volt), Leistung (Watt) und Stromstärke (Ampere) schnell und präzise zu berechnen.</p>
      </div>
      
      <div className="mt-24 flex flex-col  items-center justify-center xl:flex-row">
        <div className='p-4 items-center flex flex-col'>
          <Label className='mb-2'>Spannung V</Label>
          <RadioGroup value={`${voltage}`} onValueChange={(e) => setVoltageFunc(e)} className='flex flex-col gap-x-4'>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="5" id="option-one" />
              <Label htmlFor="5">5 V</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="12" id="12v" />
              <Label htmlFor="12">12 V</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="24" id="24v" />
              <Label htmlFor="24">24 V</Label>
            </div>
          </RadioGroup>
        </div>
        <div className=' p-4'>
          <Label>Leistung W</Label>
          <Input type='number' value={watt} onChange={(e) => setWattFunc(e.target.value)} className='mt-2'/>
        </div>

        <div className='- p-4'>
          <Label>Stromstärke A</Label>
          <Input type='number' value={amps} onChange={(e) => setAmpsFunc(e.target.value)}  className='mt-2'/>
        </div>

      </div>
      <div className='mt-24 text-left gap-4 flex flex-col'>
        <p><span className='font-medium h-2 block'>Warum ist der Rechner ideal für LED-Streifen?</span><br />
LED-Streifen benötigen oft präzise abgestimmte Netzteile, um Überlastungen oder Defekte zu vermeiden. Mit diesem Tool können Sie:

Überdimensionierte Netzteile vermeiden und Kosten sparen.
Sicherstellen, dass alle Komponenten in Ihrem Projekt optimal zusammenarbeiten.
Planungsfehler vermeiden und die Lebensdauer Ihrer LED-Streifen erhöhen.
Egal, ob Sie ein einfaches Heimprojekt oder eine professionelle Installation planen – der Volt-Watt-Ampere-Rechner ist Ihr unverzichtbarer Helfer für jedes LED-Projekt.</p>
      </div>
 
    </>
  )
}

export default App
