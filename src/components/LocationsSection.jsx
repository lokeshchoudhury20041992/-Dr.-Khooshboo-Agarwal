import { useState } from 'react'

const locations = [
  {
    name: 'Institute of Reproductive Medicine (IRM)',
    address: 'Kolkata, West Bengal',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117942.28735640444!2d88.28852859747593!3d22.515568274018214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275c8bbe29ac5%3A0x75d4cc4cf105d0ea!2sInstitute%20of%20Reproductive%20Medicine%20(IRM)!5e0!3m2!1sen!2sin!4v1777878185876!5m2!1sen!2sin',
  },
  {
    name: 'Techno India DAMA Healthcare and Medical Centre',
    address: 'Kolkata, West Bengal',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58973.602189953745!2d88.32503013614075!3d22.509805254772424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02742df11cabfb%3A0x18a3aa3cf00f534!2sTechno%20India%20DAMA%20Healthcare%20%26%20Medical%20Centre!5e0!3m2!1sen!2sin!4v1777829974019!5m2!1sen!2sin',
  },
  {
    name: 'Life Care Hospital Lauhati',
    address: 'Lauhati, Kolkata, West Bengal',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117927.47506478401!2d88.34240354795655!3d22.532920641422223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020a805f502101%3A0xafeea51d93b734fc!2sLife%20Care%20Diagnostic%20Centre%2C%20Lauhati!5e0!3m2!1sen!2sin!4v1777830004295!5m2!1sen!2sin',
  },
  {
    name: 'Spandan Hospital',
    address: 'Kolkata, West Bengal',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117852.47619987636!2d88.29693656709891!3d22.620586948280415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e2fce8f92ef%3A0x54fe83b6c01090b7!2sSPANDAN%20HOSPITAL!5e0!3m2!1sen!2sin!4v1777830067803!5m2!1sen!2sin',
  },
  {
    name: 'Rameswara Nursing Home Private Limited',
    address: 'Kolkata, West Bengal',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117936.03678987463!2d88.27460959767873!3d22.52289226026112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02761396f241bf%3A0xb9364f85dc56bcdb!2sRameswara%20Nursing%20Home%20Private%20Limited!5e0!3m2!1sen!2sin!4v1777830134838!5m2!1sen!2sin',
  },
  {
    name: 'UNUS Diagnostics and Medicines LLP',
    address: 'Kolkata, West Bengal',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29496.08625038919!2d88.33721816410058!3d22.466229151101235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02719ca73d986d%3A0xeae156185647303a!2sUNUS%20Diagnostics%20%26%20Medicines%20LLP!5e0!3m2!1sen!2sin!4v1777830278119!5m2!1sen!2sin',
  },
]

export default function LocationsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeLocation = locations[activeIndex]

  return (
    <section className="section locations-section" aria-labelledby="locations-heading">
      <div className="container">
        <div className="section-header center">
          <div className="section-tag">Consultation Centres</div>
          <h2 id="locations-heading">Where to Find Dr. Khooshboo Agarwal</h2>
          <p>
            Dr. Agarwal consults at multiple locations across Kolkata. Select a
            centre below to view its address and location on the map.
          </p>
        </div>

        <div className="locations-layout">
          <div className="locations-list" role="tablist" aria-label="Consultation locations">
            {locations.map((loc, i) => (
              <button
                key={i}
                className={`location-item ${i === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
                role="tab"
                aria-selected={i === activeIndex}
                aria-controls="location-map-panel"
              >
                <span className="location-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="location-info">
                  <h4>{loc.name}</h4>
                  <p>{loc.address}</p>
                </div>
                <span className="location-arrow" aria-hidden="true">→</span>
              </button>
            ))}
          </div>

          <div
            className="location-map-panel"
            id="location-map-panel"
            role="tabpanel"
          >
            <div className="location-detail-card">
              <h3>{activeLocation.name}</h3>
              <p className="location-address">{activeLocation.address}</p>
            </div>
            <div className="map-wrapper">
              <iframe
                key={activeIndex}
                src={activeLocation.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing ${activeLocation.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
