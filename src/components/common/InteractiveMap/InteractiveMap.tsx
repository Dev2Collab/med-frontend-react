import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FaLocationDot, FaArrowUpRightFromSquare, FaPlus, FaMinus } from 'react-icons/fa6';
import { CLINIC_INFO } from '../../../constants/navigation';

export interface InteractiveMapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  className?: string;
  height?: string;
  showDetailsButton?: boolean;
}

export function InteractiveMap({
  latitude = 30.0275,
  longitude = 31.4705,
  zoom = 15,
  className = '',
  height = '100%',
  showDetailsButton = true,
}: InteractiveMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Prevent re-initialization if already initialized or container has stale id
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((mapContainerRef.current as any)._leaflet_id) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (mapContainerRef.current as any)._leaflet_id;
    }

    // Initialize Leaflet Map
    const map = L.map(mapContainerRef.current, {
      center: [latitude, longitude],
      zoom,
      zoomControl: false, // We provide custom styled zoom controls
      attributionControl: false, // Custom compact attribution
      scrollWheelZoom: false, // Prevent accidental scrolling while page scrolls
    });

    mapInstanceRef.current = map;

    // Add High-Quality OpenStreetMap Tile Layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap',
    }).addTo(map);

    // Custom Luxury Medical Marker Pin using Leaflet DivIcon (Zero 404 image errors)
    const customPin = L.divIcon({
      className: 'interactive-clinic-pin',
      html: `
        <div style="position: relative; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
          <div style="position: absolute; width: 44px; height: 44px; background: rgba(22, 112, 204, 0.25); border-radius: 50%; animation: pulse-ring 2s infinite ease-out;"></div>
          <div style="position: relative; width: 34px; height: 34px; background: linear-gradient(135deg, #1670CC 0%, #0D9488 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2.5px solid #ffffff; box-shadow: 0 4px 14px rgba(11, 58, 102, 0.45); color: #ffffff;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
        </div>
        <style>
          @keyframes pulse-ring {
            0% { transform: scale(0.6); opacity: 1; }
            100% { transform: scale(1.4); opacity: 0; }
          }
        </style>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 22],
      popupAnchor: [0, -22],
    });

    // Add Marker with Rich Medical Popup
    const marker = L.marker([latitude, longitude], { icon: customPin }).addTo(map);

    const popupHtml = `
      <div style="direction: rtl; text-align: right; font-family: 'Cairo', sans-serif; padding: 4px; min-width: 170px;">
        <h4 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 800; color: #0F172A;">
          ${CLINIC_INFO.name}
        </h4>
        <p style="margin: 0 0 8px 0; font-size: 11px; color: #475569; line-height: 1.4;">
          القاهرة، التجمع الخامس - شارع التسعين الشمالي
        </p>
        <a 
          href="https://maps.google.com/?q=${latitude},${longitude}" 
          target="_blank" 
          rel="noopener noreferrer"
          style="display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 700; color: #1670CC; text-decoration: none;"
        >
          <span>الاتجاهات على خرائط Google &larr;</span>
        </a>
      </div>
    `;

    marker.bindPopup(popupHtml);

    // Auto open popup after brief delay for delightful experience
    const timer = setTimeout(() => {
      marker.openPopup();
    }, 600);

    return () => {
      clearTimeout(timer);
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      if (mapContainerRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete (mapContainerRef.current as any)._leaflet_id;
      }
    };
  }, [latitude, longitude, zoom]);

  const handleZoomIn = () => {
    mapInstanceRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapInstanceRef.current?.zoomOut();
  };

  const handleReset = () => {
    mapInstanceRef.current?.setView([latitude, longitude], zoom);
  };

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-white/20 shadow-md isolate ${className}`}
      style={{ height }}
    >
      {/* Map Container Element */}
      <div
        ref={mapContainerRef}
        className="w-full h-full min-h-[180px] bg-slate-100 z-0"
      />

      {/* Sleek Custom Floating Zoom Controls */}
      <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 bg-white/95 backdrop-blur-xs rounded-lg p-0.5 shadow-md border border-slate-200/80">
        <button
          type="button"
          aria-label="تكبير الخريطة"
          onClick={handleZoomIn}
          className="w-7 h-7 flex items-center justify-center text-slate-700 hover:text-brand hover:bg-slate-50 rounded transition-colors text-xs"
        >
          <FaPlus />
        </button>
        <div className="h-[1px] bg-slate-200 mx-1"></div>
        <button
          type="button"
          aria-label="تصغير الخريطة"
          onClick={handleZoomOut}
          className="w-7 h-7 flex items-center justify-center text-slate-700 hover:text-brand hover:bg-slate-50 rounded transition-colors text-xs"
        >
          <FaMinus />
        </button>
      </div>

      {/* Floating Action Badge: Open in Google Maps */}
      {showDetailsButton && (
        <div className="absolute bottom-2.5 right-2.5 left-2.5 z-10 flex items-center justify-between pointer-events-none">
          <a
            href={`https://maps.google.com/?q=${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-heading text-xs font-bold shadow-md hover:bg-brand hover:text-white transition-all group border border-slate-200/60"
          >
            <FaLocationDot className="text-brand group-hover:text-white transition-colors" />
            <span>موقعنا على الخريطة</span>
            <FaArrowUpRightFromSquare className="w-2.5 h-2.5 opacity-70 group-hover:opacity-100" />
          </a>

          <button
            type="button"
            onClick={handleReset}
            className="pointer-events-auto px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-semibold text-slate-600 hover:text-brand border border-slate-200/60 transition-colors shadow-xs"
          >
            إعادة ضبط
          </button>
        </div>
      )}
    </div>
  );
}

export default InteractiveMap;
