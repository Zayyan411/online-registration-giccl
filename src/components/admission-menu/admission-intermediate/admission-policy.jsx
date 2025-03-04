import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

const AdmissionPolicy = () => {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Header as="h5" className="text-center fw-bold">
          Extract From Admission Policy & Instructions For Intermediate
          Candidates
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            1. Admission will be granted strictly on merit.
          </ListGroup.Item>
          <ListGroup.Item>
            2. First preference would be given to the fresh candidates for
            admission. Candidates appearing in Supplementary examination are
            allowed to get admission on merit only subject to the availability
            of seats.
          </ListGroup.Item>
          <ListGroup.Item>
            3. The name of candidate, father's name and date of birth on the
            admission form must be strictly according to the matriculation
            certificate.
          </ListGroup.Item>
          <ListGroup.Item>
            4. Copy of CNIC / B-Form must be provided at the time of admission.
          </ListGroup.Item>
          <ListGroup.Item>
            5. Only a photocopy of the original matric result card will be
            accepted with the admission form while the web generated print will
            be rejected.
          </ListGroup.Item>
          <ListGroup.Item>
            6. Photo bearing white background should be attached with the
            application form.
          </ListGroup.Item>
          <ListGroup.Item>
            7. The candidates applying for admission on the basis of
            Hifz-e-Quran will submit a certificate from a registered Madrassah,
            recognized by Wafaq-ul-Madaris from where he has completed his
            Hifz-e-Quran and he has to pass the oral test before admission.
          </ListGroup.Item>
          <ListGroup.Item>
            8. "Disability Certificate" obtained from the District Disability
            Board must be attached with the admission form for "Disable Quota
            Seats". The candidates applying for admission on "Disable Quota
            Seats" must write (Special Candidate) in bold letters on the
            admission form.
          </ListGroup.Item>
          <ListGroup.Item>
            9. Final assessment of students possessing 'O' level degrees will be
            made keeping in view the percentage of their marks in 'O' level. The
            'O' level candidate should provide original equivalent certificate
            issued by IBCC, at the time of interview.
          </ListGroup.Item>
          <ListGroup.Item>
            10. Candidates are required to Opt for their subject combination
            carefully as it will not be changeable, once finalized.
          </ListGroup.Item>
          <ListGroup.Item>
            11. Double registration in BISE is not allowed, nor it is possible.
            If a candidate has applied for admission in more than one college,
            he is directed to withdraw his application from the college where he
            is not interested to get admission to avoid any discrepancy.
          </ListGroup.Item>
          <ListGroup.Item>
            12. The Candidate who has matriculation certificate from any Punjab
            board can also apply online using Online College Admission System.
          </ListGroup.Item>
          <ListGroup.Item>
            13. Candidate would apply for each category separately. After
            submission of admission forms, no category/discipline/group can be
            changed.
          </ListGroup.Item>
          <ListGroup.Item>
            14. Only eligible candidates will be called for interview on dates
            mentioned in the list of the candidates eligible for interview.
          </ListGroup.Item>
          <ListGroup.Item>
            15. After completion of all formalities pertaining to admission, the
            merit list would be displayed on College Notice Board.
          </ListGroup.Item>
          <ListGroup.Item>
            16. The candidates who fail to deposit their dues within due dates
            will lose their right to admission.
          </ListGroup.Item>
          <ListGroup.Item>
            17. Applications of students of Second Shift for change of their
            admission to First Shift shall not be entertained.
          </ListGroup.Item>
          <ListGroup.Item>
            18. Students of Second Shift are not allowed to take classes in the
            First Shift program. In case of violation strict disciplinary action
            shall be taken.
          </ListGroup.Item>
          <ListGroup.Item>
            19. The candidate applying for admission who have passed SSC
            examination other than Lahore Board must provide original N.O.C from
            the concerned board at the time of submission of Admission Forms
            otherwise their admission forms shall not be entertained.
          </ListGroup.Item>
          <ListGroup.Item>
            20. The students seeking admission in second shift will have to
            submit a separate admission form.
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
};

export { AdmissionPolicy };
