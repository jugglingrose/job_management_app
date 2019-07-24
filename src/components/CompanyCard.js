import React from 'react';

class CompanyCard extends React.Component {
  render() {
    return (
      <div>
        <h1>Company Card</h1>
        <input type="text" placeholder="Company Name" name="companyName"></input>
        <br></br>
        <input type="text" placeholder="Brief Summary About The Company" name="aboutCompany"></input>
        <br></br>
        <input type="text" placeholder="Why do you want to work here? What makes you a good fit?" name="whyCompany"></input>
        <br></br>
        <input type="radio" name="status" value="interested" />
        <label for="interested">Interested</label>
        <br></br>
        <input type="radio" name="status" value="applied" />
        <label for="applied">Applied</label>
        <br></br>
        <input type="radio" name="status" value="interviewing" />
        <label for="interviewing">Interviewing</label>
        <br></br>
        <input type="radio" name="status" value="Denied" />
        <label for="Denied">Denied</label>
        <br></br>
        <h3>Notes:</h3>
        <textarea rows="50" cols="50"></textarea>
      </div>
    );
  }
}

export default CompanyCard;