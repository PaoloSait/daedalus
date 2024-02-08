<script>
    import CaseReviewBlock from "./CaseReviewBlock.svelte";

</script>
<div class="flex flex-col items-center px-40 gap-5 mt-20 relative">
    <div class="text-3xl font-bold mb-8">What is Cauda Equina?</div>
    <div class="text-lg mb-8">
        Cauda Equina Syndrome (CES) is a rare but serious medical condition that
        occurs when the nerve roots of the cauda equina, located at the base of
        the spinal cord, become compressed. This compression can result from
        various causes such as a herniated disc, spinal tumors, trauma, or
        spinal infections. Individuals with CES may experience a range of
        symptoms, including severe lower back pain, leg weakness, numbness in
        the lower extremities, and loss of bowel or bladder control. Recognizing
        these symptoms and seeking immediate medical attention is crucial, as
        CES requires prompt intervention to prevent irreversible damage to the
        nerves.
    </div>
    <CaseReviewBlock/>
    <div class="custom-shape-divider-bottom-1706781815">
        <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
        >
            <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
            ></path>
        </svg>
    </div>
</div>
<div class="w-full h-20 bg-[#f4f4f4]"></div>

<style>
    .custom-shape-divider-bottom-1706781815 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }

    .custom-shape-divider-bottom-1706781815 svg {
        position: relative;
        display: block;
        width: calc(124% + 1.3px);
        height: 188px;
    }

    .custom-shape-divider-bottom-1706781815 .shape-fill {
        fill: #f4f4f4;
    }
</style>
