import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ReplyIcon from "@mui/icons-material/Reply";
import ForwardIcon from "@mui/icons-material/Forward";
import DeleteIcon from "@mui/icons-material/Delete";

const EmailComponent = () => {
  const theme = useTheme();

  // Sample email data
  const emails = [
    {
      id: 1,
      sender: 'john.doe@example.com',
      subject: 'Meeting Reminder',
      date: '2024-10-23',
      snippet: 'Don’t forget about our meeting tomorrow at 10 AM.',
    },
    {
      id: 2,
      sender: 'jane.smith@example.com',
      subject: 'Project Update',
      date: '2024-10-22',
      snippet: 'The project is on track for completion next week.',
    },
    {
      id: 3,
      sender: 'admin@example.com',
      subject: 'Password Reset',
      date: '2024-10-21',
      snippet: 'Click here to reset your password.',
    },
    {
        id: 4,
        sender: 'admin@example.com',
        subject: 'Password Reset',
        date: '2024-10-21',
        snippet: 'Click here to reset your password.',
      },
      {
        id: 5,
        sender: 'admin@example.com',
        subject: 'Password Reset',
        date: '2024-10-21',
        snippet: 'Click here to reset your password.',
      },
  ];

  return (
    <Box
      sx={{
        padding: 3,
        maxWidth: 900,
        margin: 'auto',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '8px',
        boxShadow: theme.shadows[2],
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold', color: theme.palette.primary.main }}>
        Inbox
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sender</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emails.map((email) => (
              <TableRow
                key={email.id}
                sx={{
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.2s',
                  },
                }}
              >
                <TableCell sx={{ fontSize: '1.1rem' }}>{email.sender}</TableCell>
                <TableCell sx={{ fontSize: '1.1rem' }}>{email.subject}</TableCell>
                <TableCell sx={{ fontSize: '1.1rem' }}>{email.date}</TableCell>
                <TableCell>
                  <Tooltip title="Reply" arrow>
                    <IconButton color="primary">
                      <ReplyIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Forward" arrow>
                    <IconButton color="primary">
                      <ForwardIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete" arrow>
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EmailComponent;
