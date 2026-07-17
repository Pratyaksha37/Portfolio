import { contact } from "@/lib/content";

export function ContactContent() {
  return (
    <div className="space-y-1">
      <div>
        <span className="text-[var(--dim)]">Email: </span>
        <a
          href={`mailto:${contact.email}`}
          className="terminal-link"
        >
          {contact.email}
        </a>
      </div>
      <div>
        <span className="text-[var(--dim)]">Phone: </span>
        <span>{contact.phone}</span>
      </div>
      <div>
        <span className="text-[var(--dim)]">LinkedIn: </span>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="terminal-link"
        >
          {contact.linkedin}
        </a>
      </div>
    </div>
  );
}
