/** Google Maps search embed for siteConfig.footer.addressLines[0]. */
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=ul.+Hugona+Ko%C5%82%C5%82%C4%85taja+1,+05-400+Otwock&hl=pl&z=16&output=embed";

export function LocationMap() {
  return (
    <section aria-labelledby="location-map-heading" className="mt-10">
      <h2 id="location-map-heading" className="text-lg font-semibold">
        Adres ośrodka
      </h2>
      <div className="mt-4 overflow-hidden rounded-[var(--radius-md)] border border-[var(--sand-200)]">
        <div className="relative aspect-video min-h-[320px] w-full">
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src={MAP_EMBED_URL}
            title="Mapa dojazdu OOWiT Otwock"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
