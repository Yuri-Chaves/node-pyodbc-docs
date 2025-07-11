import Translate from "@docusaurus/Translate";

export const KeyOfKey = ({ children }) => (
  <span>
    <span style={{ color: "#ff79c6" }}>keyof</span>{" "}
    <span style={{ color: "#8ae9fd" }}>{children}</span>
  </span>
);

export const ArrayKey = ({ children }) => (
  <span>
    <span style={{ color: "#8ae9fd" }}>Array</span>
    &lt;{children}&gt;
  </span>
);

export const TypeKey = ({ children }) => (
  <span style={{ color: "#8ae9fd" }}>{children}</span>
);

export const RequiredIndicator = ({ children }) => (
  <span>
    {children}
    <span className="required-indicator">
      <Translate
        id="requiredIndicator"
        description="Indicate that a field is required"
      >
        required
      </Translate>
    </span>
  </span>
);

export const HighlightKey = ({ children }) => (
  <span className="highlight">{children}</span>
);
