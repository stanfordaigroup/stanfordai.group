import * as React from 'react'

import './Archives.scss'

const Archives: React.StatelessComponent = () => {
  return (
    <div className="archives">
      <div className="archives__header">
        <div className="archives__count">5 past events</div>
      </div>
      <div className="archives__list">
        <div className="archives__item archives__item--speakers">
          <div className="archives__item-dashes" />
          <div className="archives__item-header">
            <div className="archives__item-icon" />
            <div className="archives__item-header-date">
              <div className="archives__item-header-month">Nov</div>
              <div className="archives__item-header-day">9</div>
            </div>
            <div className="archives__item-header-content">
              <h1 className="archives__item-header-title">(Speaker) "Applications of Deep-Learning in Drug Discovery" with Bharath Ramsundar</h1>
              <p className="archives__item-header-description">Bharath Ramsundar, a PhD student in Computer Science, will present his research on deep learning and other computational techniques for chemistry and medicine. Bharath received his Bachelor's degree in EECS and Mathematics from UC Berkeley and is now a part of Prof. Vijay Pande's lab at Stanford. He is the co-creator of DeepChem, which is the largest open-source toolchain that democratizes the use of deep-learning in drug discovery, materials science, quantum chemistry, and biology.</p>
              <p className="archives__item-header-description">This event has no requirements, and will not be recorded.</p>
            </div>
          </div>
          <div className="archives__item-content">
            <h3>Slides</h3>
            <ol>
              <li><a href="https://stanfordai.group/17-11-9/slides.pdf">Presentation Slides</a></li>
            </ol>
            <h3>Emails</h3>
            <ol>
              <li><a href="https://stanfordai.group/17-11-9/email-1.html">Applications of Deep-Learning in Drug Discovery</a></li>
            </ol>
          </div>
        </div>

        <div className="archives__item archives__item--workshops">
          <div className="archives__item-dashes" />
          <div className="archives__item-header">
            <div className="archives__item-icon" />
            <div className="archives__item-header-date">
              <div className="archives__item-header-month">Nov</div>
              <div className="archives__item-header-day">2</div>
            </div>
            <div className="archives__item-header-content">
              <h1 className="archives__item-header-title">(Ethical Workshop) Simulating Consciousness</h1>
              <p className="archives__item-header-description">
                We recommend that you read <a href="https://www.hrw.org/report/2016/12/09/making-case/dangers-killer-robots-and-need-preemptive-ban">Laws of robotics and HRW military robot</a> report by the meeting time, although we will summarize it again for you!
              </p>
            </div>
          </div>
          <div className="archives__item-content">
            <h3>Emails</h3>
            <ol>
              <li><a href="https://stanfordai.group/17-11-2/email-1.html">SAIG Ethical Discussion in "Hewlett 101"</a></li>
            </ol>
          </div>
        </div>

        <div className="archives__item archives__item--speakers">
          <div className="archives__item-dashes" />
          <div className="archives__item-header">
            <div className="archives__item-icon" />
            <div className="archives__item-header-date">
              <div className="archives__item-header-month">Oct</div>
              <div className="archives__item-header-day">26</div>
            </div>
            <div className="archives__item-header-content">
              <h1 className="archives__item-header-title">(Speaker) Animesh Garg on Robotic Vision</h1>
              <p className="archives__item-header-description">
                <strong>Animesh Garg</strong>, a postdoctoral researcher at Stanford, will be joining us at SAIG with a talk centered on <strong>robotic vision and learning</strong>. Animesh comes to us with an MS in Computer Science and a Ph.D. in Operations Research from U.C. Berkeley. Today, he works at the <a href="http://ai.stanford.edu/">Stanford AI Lab</a> with a focus on robotics and computer vision.

                Find more about Animesh <a href="http://ai.stanford.edu/~garg/">on his website</a>.
              </p>
            </div>
          </div>
          <div className="archives__item-content">
            <h3>Emails</h3>
            <ol>
              <li><a href="https://stanfordai.group/17-10-26/email-1.html">SAIG — First Workshop This Thursday! (10/19 @ 7PM)</a></li>
            </ol>
          </div>
        </div>

        <div className="archives__item archives__item--workshops">
          <div className="archives__item-dashes" />
          <div className="archives__item-header">
            <div className="archives__item-icon" />
            <div className="archives__item-header-date">
              <div className="archives__item-header-month">Oct</div>
              <div className="archives__item-header-day">19</div>
            </div>
            <div className="archives__item-header-content">
              <h1 className="archives__item-header-title">(Tech Workshop) Basic Neural Networks</h1>
              <p className="archives__item-header-description">Shubhang Desai, a member of our team, will be teaching basic usage of Neural Networks with Python. If you’ve never worked with AI or machine learning before, or want a refresher, this workshop is for you!</p>
            </div>
          </div>
          <div className="archives__item-content">
            <h3>Slides</h3>
            <ol>
              <li><a href="https://stanfordai.group/17-10-19/slides.pdf">Basic Neural Networks — Workshop #1</a></li>
            </ol>
            <h3>GitHub Repo</h3>
            <ol>
              <li><a href="https://github.com/stanfordaigroup/basic-nn-workshop">stanfordaigroup/basic-nn-workshop</a></li>
            </ol>
            <h3>Emails</h3>
            <ol>
              <li><a href="https://stanfordai.group/17-10-19/email-1.html">SAIG — First Workshop This Thursday! (10/19 @ 7PM)</a></li>
            </ol>
            <hr/>
            <p><strong>NOTE</strong>: Apologies to those interested, but the audio of this event was corrupted. We will be hosting more beginner-friendly events in the future, so don't fret!</p>
          </div>
        </div>

        <div className="archives__item archives__item--social">
          <div className="archives__item-dashes" />
          <div className="archives__item-header">
            <div className="archives__item-icon" />
            <div className="archives__item-header-date">
              <div className="archives__item-header-month">Oct</div>
              <div className="archives__item-header-day">12</div>
            </div>
            <div className="archives__item-header-content">
              <h1 className="archives__item-header-title">(Social) First Meeting</h1>
              <p className="archives__item-header-description">Our first meeting as a public student organization. Started with introductions of the team and org, and ended with a viewing of the <em>Twilight Zone</em>.</p>
            </div>
          </div>
          <div className="archives__item-content">
            <h3>Slides</h3>
            <ol>
              <li><a href="https://stanfordai.group/17-10-12/student-ai-group-intro.pdf">Student AI Group — Intro</a></li>
            </ol>
            <h3>Emails</h3>
            <ol>
              <li><a href="https://stanfordai.group/17-10-12/email-1.html">SAIG — First Meeting Tomorrow @ 7pm</a></li>
              <li><a href="https://stanfordai.group/17-10-12/email-2.html">[ACTION REQUIRED] Follow-Up After Our First Meeting</a></li>
              <li><a href="https://stanfordai.group/17-10-12/email-3.html">SAIG — Internship Applications Open!</a></li>
            </ol>
            <h3>Attachments</h3>
            <ol>
              <li><a href="https://stanfordai.group/17-10-12/flyer-1.pdf">Ad Flyer 1</a></li>
              <li><a href="https://stanfordai.group/17-10-12/flyer-2.pdf">Ad Flyer 2</a></li>
              <li><a href="https://stanfordai.group/17-10-12/flyer-3.pdf">Ad Flyer 3</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archives;
