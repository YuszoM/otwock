export type TimeSlot = {
  startsAt: string;
  endsAt: string;
  label: string;
  timeLabel: string;
};

export type BookingConfirmation = {
  referenceCode: string;
  specialistName: string;
  serviceName: string;
  startsAt: string;
  patientName: string;
  patientEmail: string;
};

export function generateReferenceCode(): string {
  const part = () => Math.random().toString(36).slice(2, 6).toUpperCase();
  return `OOW-${part()}${part()}`;
}

export function formatSlotLabel(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString("pl-PL", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatTimeOnly(iso: string): string {
  return new Date(iso).toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" });
}

/** Demo slots — deterministic feel, no backend. */
export function generateMockSlots(specialistSlug: string, daysAhead = 21): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const hours = [9, 10, 11, 13, 14, 15, 16];
  const now = new Date();
  const day = new Date(now);
  day.setHours(0, 0, 0, 0);

  let weekdays = 0;
  while (weekdays < daysAhead) {
    day.setDate(day.getDate() + 1);
    const dow = day.getDay();
    if (dow === 0 || dow === 6) continue;
    weekdays++;

    // Simulate some taken slots per specialist (deterministic hash)
    const seed = (day.getDate() + specialistSlug.length + dow) % 5;

    for (let i = 0; i < hours.length; i++) {
      if ((seed + i) % 4 === 0) continue; // ~25% slots "taken"
      const h = hours[i]!;
      const start = new Date(day);
      start.setHours(h, 0, 0, 0);
      if (start <= now) continue;
      const end = new Date(start.getTime() + 50 * 60_000);
      const startsAt = start.toISOString();
      slots.push({
        startsAt,
        endsAt: end.toISOString(),
        label: formatSlotLabel(startsAt),
        timeLabel: formatTimeOnly(startsAt),
      });
    }
  }

  return slots;
}

export function getUniqueDates(slots: TimeSlot[]): string[] {
  return [...new Set(slots.map((s) => s.startsAt.slice(0, 10)))].sort();
}

export function createMockBooking(input: {
  specialistName: string;
  serviceName: string;
  startsAt: string;
  patientName: string;
  patientEmail: string;
}): BookingConfirmation {
  return {
    referenceCode: generateReferenceCode(),
    specialistName: input.specialistName,
    serviceName: input.serviceName,
    startsAt: input.startsAt,
    patientName: input.patientName,
    patientEmail: input.patientEmail,
  };
}
