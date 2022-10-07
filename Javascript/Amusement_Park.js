 export function createVisitor(name, age, ticketId) {
    const visitor = {
      name: name,
      age: age,
      ticketId: ticketId,
    };
    return visitor;
  }

  export function revokeTicket(visitor) {
    visitor.ticketId = null;
    return visitor;
  }

  export function ticketStatus(tickets, ticketId) {
    const name = tickets[ticketId];
    switch (name) {
      case undefined:
        return 'unknown ticket id';
      case null:
        return 'not sold';
      default:
        return 'sold to ' + name;
    };
  }

  export function simpleTicketStatus(tickets, ticketId) {
    const name = tickets[ticketId];
    return name ?? 'invalid ticket !!!'
  }

  export function gtcVersion(visitor) {
    return visitor.gtc?.version;
  }
  