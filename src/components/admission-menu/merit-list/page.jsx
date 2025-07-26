import React, { useEffect, useState } from "react";
import { Container, Card, Table, Spinner, Badge } from "react-bootstrap";
import axios from "axios";

const MeritLists = () => {
  const [meritLists, setMeritLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeritLists = async () => {
      try {
        const res = await axios.get(
          "https://online-registration-backened.vercel.app/api/merit-lists"
        );
        const list = res.data.data;
        setMeritLists(list);
      } catch (err) {
        console.error("Failed to fetch merit lists:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeritLists();
  }, []);
  if (meritLists?.length === 0) {
    return <p>No merit lists available</p>;
  }
  return (
    <Container className="my-5">
      <Card>
        <Card.Header style={{ background: "#036674" }} className="text-white">
          <h2 className="mb-0">MERIT LISTS</h2>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Below are the merit lists for BS programs (Morning and Evening):
          </Card.Text>

          {loading ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Morning List</th>
                  <th>Evening List</th>
                </tr>
              </thead>
              <tbody>
                {meritLists.map((item) => (
                  <tr key={item.program}>
                    <td>{item.program}</td>
                    <td>
                      {item.morning ? (
                        <>
                          Merit: {item.morning.merit} | Schedule:{" "}
                          {item.morning.schedule}{" "}
                          <Badge bg="success" className="ms-2">
                            {item.morning.status}
                          </Badge>
                        </>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td>
                      {item.evening ? (
                        <>
                          Merit: {item.evening.merit} | Schedule:{" "}
                          {item.evening.schedule}{" "}
                          <Badge bg="success" className="ms-2">
                            {item.evening.status}
                          </Badge>
                        </>
                      ) : (
                        "—"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
        <Card.Footer className="text-muted">
          Last updated: {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </Container>
  );
};

export { MeritLists };
