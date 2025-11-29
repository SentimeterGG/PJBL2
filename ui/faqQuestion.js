class UIFaq extends HTMLElement {
  constructor() {
    super();
    this.question = this.getAttribute("question") || "Any Question??";
    this.answer = this.getAttribute("answer") || "Any Question??";
  }
  connectedCallback() {
    this.innerHTML = `
<style>
  .faq-question_question{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0rem 1rem 1.5rem;
    border-bottom: 1px solid #000000;
  }
  .faq-question_question_button{
    background: transparent;
    aspect-ratio: 1/1;
    border: 1px solid var(--color-background-600);
    padding: 0.8rem;
    margin-left: 1rem;
  }
  .faq-question_answer{
    overflow: hidden;
  }
  .faq-question_wrapper-answer.active{
    grid-template-rows: 1fr;
  }
  .faq-question_wrapper-answer{
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease-out;
  }
  .faq-question_answer p{
    margin: 1rem 1.5rem;
  }
  .faq-question x-icon{
    min-width: 1.5rem;
    transition: transform 0.3s ease-out;
  }
  .faq-question x-icon.active{
    transform: rotate(45deg);
  }
</style>
<div class="faq-question">
  <div class="faq-question_question">
    <p style="text-align: left;">${this.question}</p>
    <button class="faq-question_question_button"><x-icon name="plus" color="black"></x-icon></button>
  </div>
  <div class="faq-question_wrapper-answer">
    <div class="faq-question_answer">
      <p>${this.answer}</p>
    </div>
  </div>
</div>
`;
    let faqAnswer = this.querySelector(".faq-question_wrapper-answer");
    let faqButton = this.querySelector(".faq-question_question_button");
    let faqButtonIcon = this.querySelector("x-icon");
    let faqButtonToggled = false;
    faqButton.addEventListener("click", function () {
      if (faqButtonToggled == false) {
        faqButtonIcon.classList.add("active");
        faqAnswer.classList.add("active");
      } else {
        faqButtonIcon.classList.remove("active");
        faqAnswer.classList.remove("active");
      }
      faqButtonToggled = !faqButtonToggled;
    });
  }
}
customElements.define("ui-faq", UIFaq);
