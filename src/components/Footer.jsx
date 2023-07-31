const Footer = () => {
  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#222",
        color: "#e8e8e8",
        width: "100%",
        marginTop: "auto",
        fontSize: "18px",
        fontWeight: "700",
      }}
    >
      <span>
        COPYRIGHT &copy; 2021 .ALL RIGHTS RESERVED BY
        <a
          style={{
            color: "inherit",
            textDecoration: "underline",
            marginLeft: "4px",
          }}
          href="https://github.com/3mmar0"
        >
          @3mmar
        </a>
      </span>
    </div>
  );
};

export default Footer;
