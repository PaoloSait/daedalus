<script>
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Dropdown,
        DropdownItem,
        MegaMenu,
    } from "flowbite-svelte";
    import { ChevronDownSolid } from "flowbite-svelte-icons";
   
    let menu = [
        { name: "Free CBT Sessions", href: "/" },
        { name: "Free VR Psychosexual Therapy", href: "/" },
        { name: "Facebook Support Group", href: "/" },
        { name: "Our Online Forum", href: "/" },
        { name: "Patient Stories", href: "/" },
    ];
</script>

<Navbar>
    <NavBrand href="/">
        <img
            src="/temporary_logo.png"
            class="me-3 h-6 sm:h-9"
            alt="temporary logo"
        />
        <span
            class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
            >Cauda Equina Therapy</span
        >
    </NavBrand>
    <NavHamburger />
    <NavUl>
        <NavLi class="cursor-pointer">
            Cauda Equina Syndrome<ChevronDownSolid
                class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline"
            />
        </NavLi>
        <Dropdown offset="18">
            <DropdownItem>What is Cauda Equina?</DropdownItem>
            <DropdownItem>Cauda Equina Syndrome</DropdownItem>
            <DropdownItem>Diagnosis</DropdownItem>
            <DropdownItem>Rehabilitation</DropdownItem>
            <DropdownItem>Treatment</DropdownItem>
        </Dropdown>

        <NavLi class="cursor-pointer">
            Bladder & Bowel Dysfunction<ChevronDownSolid
                class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline"
            />
        </NavLi>
        <Dropdown offset="18">
            <DropdownItem>Urodynamics</DropdownItem>
            <DropdownItem>Pelvic Floor Exercises</DropdownItem>
            <DropdownItem>Spinal Cord Stimulators</DropdownItem>
        </Dropdown>

        <NavLi class="cursor-pointer">
            Support<ChevronDownSolid
                class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline"
            />
        </NavLi>
        <MegaMenu items={menu} let:item>
            <a
                href={item.href}
                class="flex items-center hover:text-primary-600 dark:hover:text-primary-500"
                >{item.name}
            </a>
        </MegaMenu>

        <NavLi class="cursor-pointer">
            Research<ChevronDownSolid
                class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline"
            />
        </NavLi>
        <Dropdown offset="18">
            <DropdownItem>Surgical Interventions</DropdownItem>
            <DropdownItem>Stem Cell Biology</DropdownItem>
        </Dropdown>
    </NavUl>
</Navbar>
