<script>
    import {
        Footer,
        FooterLinkGroup,
        FooterLink,
        FooterCopyright,
    } from "flowbite-svelte";
</script>

<Footer footerType="sitemap">
    <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">
                Company
            </h2>
            <FooterLinkGroup ulClass="text-gray-300">
                <FooterLink liClass="mb-4" href="/">About</FooterLink>
                <FooterLink liClass="mb-4" href="/">Careers</FooterLink>
                <FooterLink liClass="mb-4" href="/">Brand Center</FooterLink>
                <FooterLink liClass="mb-4" href="/">Blog</FooterLink>
            </FooterLinkGroup>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">
                Download
            </h2>
            <FooterLinkGroup ulClass="text-gray-300">
                <FooterLink liClass="mb-4" href="/">Discord Server</FooterLink>
                <FooterLink liClass="mb-4" href="/">Twitter</FooterLink>
                <FooterLink liClass="mb-4" href="/">Facebook</FooterLink>
                <FooterLink liClass="mb-4" href="/">Contact Us</FooterLink>
            </FooterLinkGroup>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">
                Legal
            </h2>
            <FooterLinkGroup ulClass="text-gray-300">
                <FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
                <FooterLink liClass="mb-4" href="/">Licensing</FooterLink>
                <FooterLink liClass="mb-4" href="/"
                    >Terms & Conditions</FooterLink
                >
            </FooterLinkGroup>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">
                Download
            </h2>
            <FooterLinkGroup ulClass="text-gray-300">
                <FooterLink liClass="mb-4" href="/">iOS</FooterLink>
                <FooterLink liClass="mb-4" href="/">Android</FooterLink>
                <FooterLink liClass="mb-4" href="/">Windows</FooterLink>
                <FooterLink liClass="mb-4" href="/">MacOS</FooterLink>
            </FooterLinkGroup>
        </div>
    </div>
    <div
        class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between"
    >
        <FooterCopyright
            spanClass="text-sm text-gray-300 sm:text-center"
            href="/"
            by="TBC™"
        />
    </div>
</Footer>
