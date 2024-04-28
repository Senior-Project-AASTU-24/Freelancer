import React from "react";
import { Typography, Box, useTheme, Container, Divider } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../utils/Header";
import { useFormik } from "formik";
import * as yup from "yup";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

const Signup = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const initial = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const schema = yup.object({
    email: yup.string().email("Invalid email address").required("Required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    confirmPassword: yup
      .string("Enter your password")
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Password confirmation is required"),
    username: yup.string().required("Required"),
    fullName: yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            paddingTop: 8,
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Header bold="Sign up to FreeLancer" color="#FFFFFF" />
          </Box>

          <Formik
            initialValues={initial}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <Box display="grid" gap="10px">
                  <TextField
                    id="filled-basic"
                    variant="filled"
                    margin="normal"
                    fullWidth
                    label="Full Name"
                    name="fullName"
                    autoComplete="name"
                    error={
                      !!formik.touched.fullName && !!formik.errors.fullName
                    }
                    helperText={
                      formik.touched.fullName && formik.errors.fullName
                    }
                    {...formik.getFieldProps("fullName")}
                    InputProps={{
                      sx: { backgroundColor: "#2B2B2B", borderRadius: "8px" },
                    }}
                    InputLabelProps={{
                      style: { color: "#585858" },
                    }}
                  />
                  <TextField
                    id="filled-basic"
                    variant="filled"
                    margin="normal"
                    fullWidth
                    label="Username"
                    name="username"
                    autoComplete="username"
                    error={
                      !!formik.touched.username && !!formik.errors.username
                    }
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
                    {...formik.getFieldProps("username")}
                    InputProps={{
                      sx: { backgroundColor: "#2B2B2B", borderRadius: "8px" },
                    }}
                    InputLabelProps={{
                      style: { color: "#585858" },
                    }}
                  />
                  <TextField
                    id="filled-basic"
                    variant="filled"
                    margin="normal"
                    fullWidth
                    label="Email"
                    name="email"
                    autoComplete="email"
                    error={!!formik.touched.email && !!formik.errors.email}
                    helperText={formik.touched.email && formik.errors.email}
                    {...formik.getFieldProps("email")}
                    InputProps={{
                      sx: { backgroundColor: "#2B2B2B", borderRadius: "8px" },
                    }}
                    InputLabelProps={{
                      style: { color: "#585858" },
                    }}
                  />

                  <TextField
                    id="filled-basic"
                    variant="filled"
                    margin="normal"
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    error={
                      !!formik.touched.password && !!formik.errors.password
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    {...formik.getFieldProps("password")}
                    InputProps={{
                      sx: { backgroundColor: "#2B2B2B", borderRadius: "8px" },
                    }}
                    InputLabelProps={{
                      style: { color: "#585858" },
                    }}
                  />

                  <TextField
                    id="filled-basic"
                    variant="filled"
                    margin="normal"
                    fullWidth
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    error={
                      !!formik.touched.confirmPassword &&
                      !!formik.errors.confirmPassword
                    }
                    helperText={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                    {...formik.getFieldProps("confirmPassword")}
                    InputProps={{
                      sx: { backgroundColor: "#2B2B2B", borderRadius: "8px" },
                    }}
                    InputLabelProps={{
                      style: { color: "#585858" },
                    }}
                  />
                </Box>

                <Box display="grid" gap="10px" m="20px">
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        variant="contained"
                        style={{
                          height: "65px",
                          backgroundColor: "#0055FF",
                          color: "white",
                          borderRadius: "8px",
                        }}
                      >
                        {" "}
                        <Typography
                          variant="button"
                          display="block"
                          gutterBottom
                          fontWeight="bold"
                        >
                          Employee{" "}
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        variant="contained"
                        style={{
                          height: "65px",
                          backgroundColor: "#D1DEFD",
                          color: "#0055FF",
                          borderRadius: "8px",
                        }}
                      >
                        {" "}
                        <Typography
                          variant="button"
                          display="block"
                          gutterBottom
                          fontWeight="bold"
                        >
                          Employee{" "}
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Box>

                <Box display="grid" gap="10px" mt="20px">
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      height: "45px",
                      backgroundColor: "white",
                      color: "black",
                    }}
                  >
                    {
                      <Typography
                        variant="button"
                        display="block"
                        gutterBottom
                        fontWeight="bold"
                      >
                        Sign up{" "}
                      </Typography>
                    }
                  </Button>
                </Box>
                <Box display="grid" gap="10px" mt="20px">
                  <Divider light={true}>
                    <Typography
                      variant="body2"
                      display="block"
                      sx={{ color: "#5F5F5F" }}
                    >
                      or continue with
                    </Typography>{" "}
                  </Divider>
                </Box>
                <Box display="grid" gap="10px" mt="20px">
                  <Button
                    variant="contained"
                    style={{
                      height: "45px",
                      backgroundColor: "#3B5998",
                      color: "white",
                    }}
                  >
                    {
                      <Typography
                        variant="button"
                        display="block"
                        gutterBottom
                        fontWeight="bold"
                      >
                        Facebook
                      </Typography>
                    }
                  </Button>
                </Box>
                <Box display="grid" gap="10px" mt="20px">
                  <Button
                    variant="contained"
                    style={{
                      height: "45px",
                      backgroundColor: "#DB4437",
                      color: "white",
                    }}
                  >
                    {
                      <Typography
                        variant="button"
                        display="block"
                        gutterBottom
                        fontWeight="bold"
                      >
                        Google
                      </Typography>
                    }
                  </Button>
                </Box>
                <Box
                  display="grid"
                  gap="10px"
                  mt="70px"
                  mb="10px"
                  textAlign="center"
                >
                  <Typography variant="caption" display="block" color="#5F5F5F">
                    Already have an account? &nbsp;
                    <Link href="/login" color="#FFFFFF">
                      {"Login"}
                    </Link>
                  </Typography>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Container>
    </div>
  );
};

export default Signup;
