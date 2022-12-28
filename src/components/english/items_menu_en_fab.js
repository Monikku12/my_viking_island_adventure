import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB, Portal } from "react-native-paper";

import QuestListEnModal from "./quest_list_en_modal";

const ItemsMenu = () => {
    // const navigation = useNavigation();

    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;

    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    // Since the state is a boolean, you can set it to be the opposite of what it is currently with the following.
    // const toggleModal = () => setVisible((prevState) => !prevState);

    React.useEffect(() => {
        console.log("visible changed:", visible);
    }, [visible]);

    return (
        <Portal>
            <FAB.Group
                open={open}
                icon={open ? "window-close" : "bag-personal"}
                style={styles.fab}
                backdropColor="transparent"
                actions={[
                    {
                        icon: "cog-outline",
                        // label: "Options",
                        onPress: () => console.log("Pressed Options"),
                    },
                    {
                        icon: "script-text-outline",
                        // label: "Quest",
                        // onPress: () => console.log("Pressed Options"),
                        onPress: showModal,
                    },
                    {
                        icon: "book-open-page-variant-outline",
                        // label: "Notebook"
                        onPress: () => console.log("Pressed Notebook"),
                    },
                    {
                        icon: "bag-personal",
                        // label: "Items",
                        onPress: () => console.log("Pressed Items"),
                    },
                ]}
                onStateChange={onStateChange}
                onPress={() => {
                    if (open) {
                        // do something if the speed dial is open
                    }
                }}
            />
            <QuestListEnModal isOpen={visible} onClose={hideModal} />
        </Portal>
        // <QuestListEnModal/>
    );
};

const styles = StyleSheet.create({
    fab: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        position: "absolute",
        margin: 0,
        backdropColor: "transparent",
    },
});

export default ItemsMenu;