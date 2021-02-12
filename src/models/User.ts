import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
interface UserProps {
  age?: number;
  id?: number;
  name?: string;
}

const rootUrl = "http://localhost:3000";
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync(rootUrl);
  public attribues: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attribues = new Attributes(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attribues.get;
  }

  set(update: UserProps): void {
    this.attribues.set(update);
    this.events.trigger("change");
  }
}
