import { IChildren } from "../../models/models";

export function Section({ children }: IChildren) {
  return (
    <>
      <section className="main-section">
        {children}
      </section>
    </>
  );
}
